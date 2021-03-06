require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");
const serverless = require("serverless-http");

const PORT = process.env.PORT || 9000;
const whitelist = [
  "http://localhost:3000",
  "https://www.cdotgrass.com",
  "https://main.d3ij7dq5wbhsdz.amplifyapp.com",
];

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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
    res.json({ error: "not authorized to make this request" });
  }
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  bufferMaxEntries: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/posts", require("./routes/posts.js"));
app.use("/tags", require("./routes/tags.js"));
app.use("/admin", require("./routes/admin.js"));

app.get("/", (req, res) => {
  res.send("Blog API");
});

if (process.env.RUN_DEV) {
  app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
  });
}

exports.handler = serverless(app);
