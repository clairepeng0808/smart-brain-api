import Clarifai from "clarifai";

const handleImageUrl = (req, res) => {
  const app = new Clarifai.App({
    apiKey: "507b9eda218142d19aaf928ae3d22d53",
  });
  const { input } = req.body;
  app.models
    .predict("c0c0ac362b03416da06ab3fa36fb58e3", input)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Unable to fetch API"));
};

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entry) => res.json(entry[0]))
    .catch((err) => res.status(400).json("Unable to get count"));
};

export default { handleImage, handleImageUrl };
