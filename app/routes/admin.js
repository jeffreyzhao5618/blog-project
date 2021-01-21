const express = require("express");
const router = express.Router();
const bp = require("../models/BlogPost");

// Checks if user is logged in
router.get("/login", (req, res) => {
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
    res.json({ success: "Logged in" });
  } else {
    console.log("failed");
    res.json({ error: "Log in Failed" });
  }
});

// get adming post
router.get("/post", (req, res) => {
  bp.AdminPostModel.findOne({}, (err, post) => {
    if (err) {
      console.log(err);
      res.json({ error: "error getting admin post " });
    } else {
      res.json(post);
    }
  });
});

// update admin post if it exists otherwise create a new one
router.post("/post", (req, res) => {
  bp.AdminPostModel.findOne({}, "_id", (err, post) => {
    if (err) {
      console.log(err);
    } else {
      if (post) {
        bp.AdminPostModel.findByIdAndUpdate(
          post._id,
          req.body,
          { useFindAndModify: false },
          (err, post) => {
            if (err) {
              console.log(err);
              res.json({ error: "error updating admin post" });
            } else {
              res.json(post);
            }
          }
        );
      } else {
        bp.AdminPostModel.create(req.body, (err, post) => {
          if (err) {
            console.log(err);
            res.json({ error: "error creating admin post" });
          } else {
            res.json(post);
          }
        });
      }
    }
  });
});

module.exports = router;
