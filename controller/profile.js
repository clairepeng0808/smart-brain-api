const handleProfile = (req, res, db) => {
  console.log(req.params);
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("User not Found.");
      }
    });
};

export default { handleProfile };
