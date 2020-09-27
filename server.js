import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import knex from "knex";
import register from "./controller/register.js";
import signin from "./controller/signin.js";
import profile from "./controller/profile.js";
import image from "./controller/image.js";

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("its working!");
  //   db.select("*")
  //     .from("users")
  //     .orderBy("id", "asc")
  //     .then((users) => {
  //       res.json(users);
  //     });
});
app.post("/signin", (req, res) => signin.handleSignin(req, res, db, bcrypt));

app.post("/register", (req, res) =>
  register.handleRegister(req, res, db, bcrypt)
);
// for users to update their emails/name/password info
app.get("/profile/:id", (req, res) => profile.handleProfile(req, res, db));
app.put("/image", (req, res) => image.handleImage(req, res, db));
app.post("/imageurl", (req, res) => image.handleImageUrl(req, res));

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log(`apps running on port ${PORT}`);
});

/*
'/' -> res with index.html
'/signin' -> POST success/fail
'/register' -> POST = user
'/profile/:userid' -> GET = user
'/image' -> PUT = user
*/
