require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");

const PORT = process.env.PORT || 9000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(
  cookieSession({
    name: "cookie-session",
    secret: process.env.SESSION_SECRET,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  })
);

// auth middleware
app.use((req, res, next) => {
  if (req.method === "GET" || req.path === "/admin/login") next();
  else if (req.session.key === process.env.POST_AUTH) {
    next();
  } else {
    res.json({ message: "not authorized to make this request" });
  }
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/posts", require("./routes/posts.js"));
app.use("/tags", require("./routes/tags.js"));
app.use("/admin", require("./routes/admin.js"));

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
  console.log("Server listening on port " + PORT);
});
