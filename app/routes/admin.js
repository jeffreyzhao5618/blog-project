const express = require("express");
const router = express.Router();

// Checks if user is logged in
router.get("/login", (req, res) => {
  console.log(req.session);
  if (req.session.key === process.env.POST_AUTH) {
    res.json({ loggedin: 1 });
  } else res.json({ loggedin: 0 });
});

router.post("/login", (req, res) => {
  // const auth = { login: "admin", password: process.env.ADMIN_PASSWORD };

  // const b64auth = req.headers.authorization.split(" ")[1];
  // const [login, password] = Buffer.from(b64auth, "base64")
  //   .toString("ascii")
  //   .split(":");
  // if (login === auth.login && password === auth.password) {
  //   req.session.key = process.env.POST_AUTH;
  //   res.json({ success: "Logged In" });
  // } else {
  //   res.json({ error: "Log in Failed" });
  // }
  if (
    req.body.username === "admin" &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    console.log("passed");
    req.session.key = process.env.POST_AUTH;
    console.log(req.session);
    res.json({ success: "Logged in" });
  } else {
    console.log("failed");
    res.json({ error: "Log in Failed" });
  }
});

module.exports = router;
