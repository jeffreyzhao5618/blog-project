require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());
// BASIC auth middleware
app.use((req, res, next) => {
  if (req.method === "GET") next();
  else {
    const auth = { login: "admin", password: process.env.ADMIN_PASSWORD };

    const b64auth = req.headers.authorization.split(" ")[1];
    const [login, password] = Buffer.from(b64auth, "base64")
      .toString("ascii")
      .split(":");
    if (login === auth.login && password === auth.password) {
      next();
    } else {
      res.json({ message: "not authorized to make this request" });
    }
  }
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/posts", require("./routes/posts.js"));
app.use("/tags", require("./routes/tags"));

// const test = new bp.BlogPostModel({
//   title: "Test DB Post 4",
//   posted_on: Date.now(),
//   content: "This is a test DB post",
// });

// test.save((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Test post saved!");
//   }
// });

app.get("/", (req, res) => {
  res.send("Blog API");
});

app.listen(PORT, () => {
  console.log("Server listending on port " + PORT);
});
