const handleRegister = async (req, res, db, bcrypt) => {
  const storeHashInDatabase = (hash) => {
    // Store the hash in your password DB
    return hash; // For now we are returning the hash for testing at the bottom
  };
  const storeUserPassword = (password, salt) =>
    bcrypt.hash(password, salt).then(storeHashInDatabase);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json("Incorrect format!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await storeUserPassword(password, salt);

  db.transaction((trx) => {
    trx("login")
      .insert({
        email: email,
        hash: hashedPassword,
      })
      .returning("email")
      .then(async (loginEmail) => {
        const user = await trx("users")
          .insert({
            name: name,
            email: loginEmail[0],
            date_joined: new Date(),
          })
          .returning("*"); //return the user
        return res.json(user[0]);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(console.log("Registration Complete!"))
    .catch((err) => res.status(400).json("Unable to register"));
};

export default { handleRegister };
