const handleSignin = (req, res, db, bcrypt) => {
  const checkUserPassword = (enteredPassword, storedPasswordHash) =>
    bcrypt.compare(enteredPassword, storedPasswordHash);

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Incorrect format!");
  }

  db.select("email", "hash")
    .from("login")
    .where("email", "=", req.body.email)
    .then(async (data) => {
      const isValid = await checkUserPassword(password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", email)
          .then((data) => res.json(data[0]))
          .catch((err) => res.status(400).json("Service Error"));
      } else {
        res.status(400).json("Wrong credentials");
      }
    })
    .catch((err) => res.status(400).json("Wrong credentials"));
};

export default { handleSignin };
