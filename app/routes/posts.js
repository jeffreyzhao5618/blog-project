const mongoose = require("mongoose");
const express = require("express");
const bp = require("../models/BlogPost");
const tg = require("../models/Tag");
const router = express.Router();

// get all blog posts
router.get("/", (req, res) => {
  bp.BlogPostModel.find((err, posts) => {
    if (err) {
      console.log(err);
      res.json({ message: "error getting blog posts" });
    } else {
      res.json(posts);
    }
  });
});

// get one blog post by id
router.get("/:id", (req, res) => {
  bp.BlogPostModel.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
      res.json({ message: "error getting blog post" });
    } else {
      res.json(post);
    }
  });
});

// create new blog post
router.post("/", (req, res) => {
  let tagList = [];

  const foo = new Promise((resolve, reject) => {
    req.body.tags.forEach((tag, index) => {
      tg.TagModel.findOne({ name: tag }, (err, foundTag) => {
        if (err) {
          console.log(err);
          reject();
        }
        if (foundTag) {
          tagList.push(foundTag._id);
          if (index === req.body.tags.length - 1) resolve();
        } else {
          // create tag if not found
          tg.TagModel.create({ name: tag }, (err, createdTag) => {
            if (err) {
              console.log(err);
              reject();
            } else {
              tagList.push(createdTag._id);
              if (index === req.body.tags.length - 1) resolve();
            }
          });
        }
      });
    });
  });

  foo.then(() => {
    bp.BlogPostModel.create(
      {
        title: req.body.title,
        content: req.body.content,
        tags: tagList,
      },
      (err, post) => {
        if (err) {
          console.log(err);
          res.json({ message: "error creating blog post" });
        } else {
          res.json(post);
        }
      }
    );
  });
});

// update blog post by id
router.post("/:id", (req, res) => {
  bp.BlogPostModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, post) => {
      if (err) {
        console.log(err);
        res.json({ message: "error updating blog post" });
      } else {
        res.json(post);
      }
    }
  );
});

// delete blog post by id
router.delete("/:id", (req, res) => {
  bp.BlogPostModel.findByIdAndDelete(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
      res.json({ message: "error deleting blog post" });
    } else {
      if (post) res.json(post);
      else res.json({ message: "can not find post with given id" });
    }
  });
});

module.exports = router;
