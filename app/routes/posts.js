const express = require("express");
const bp = require("../models/BlogPost");
const tg = require("../models/Tag");
const router = express.Router();

// get all blog posts
router.get("/", (req, res) => {
  bp.BlogPostModel.find((err, posts) => {
    if (err) {
      console.log(err);
      res.json({ error: "error getting blog posts" });
    } else {
      res.json(posts);
    }
  });
});

// get most recent blog posts from index
router.get("/all/recent/:index/:limit", (req, res) => {
  bp.BlogPostModel.find({})
    .sort({ _id: -1 })
    .skip(Number(req.params.index))
    .limit(Number(req.params.limit))
    .exec((err, posts) => {
      if (err) {
        console.log(err);
        res.json({ error: "error getting blog posts" });
      } else {
        res.json(posts);
      }
    });
});

// get titles of recent blog posts
router.get("/titles/recent/:limit", (req, res) => {
  bp.BlogPostModel.find({}, "title")
    .sort({ _id: -1 })
    .limit(Number(req.params.limit))
    .exec((err, titles) => {
      if (err) {
        console.log(err);
        res.json({ error: "error getting blog posts" });
      } else {
        res.json(titles);
      }
    });
});

// get one blog post by id
router.get("/id/:id", (req, res) => {
  bp.BlogPostModel.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
      res.json({ error: "error getting blog post" });
    } else {
      res.json(post);
    }
  });
});

// get number of blog posts
router.get("/count", (req, res) => {
  bp.BlogPostModel.count({}, (err, count) => {
    if (err) {
      console.log(err);
      res.json({ error: "error getting number of posts" });
    } else {
      res.json({ count });
    }
  });
});

// create new blog post
router.post("/", (req, res) => {
  let tagList = [];

  const foo = new Promise((resolve, reject) => {
    req.body.tags.forEach((tag, index) => {
      tag = tag.toLowerCase();
      tg.TagModel.findOne({ name: tag }, (err, foundTag) => {
        if (err) {
          console.log(err);
          reject();
        }
        if (foundTag) {
          tagList.push(tag);
          if (index === req.body.tags.length - 1) resolve();
        } else {
          // create tag if not found
          tg.TagModel.create({ name: tag }, (err) => {
            if (err) {
              console.log(err);
              reject();
            } else {
              tagList.push(tag);
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
          res.json({ error: "error creating blog post" });
        } else {
          res.json(post);
        }
      }
    );
  });
});

// update blog post by id
router.put("/:id", (req, res) => {
  bp.BlogPostModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, post) => {
      if (err) {
        console.log(err);
        res.json({ error: "error updating blog post" });
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
      res.json({ error: "error deleting blog post" });
    } else {
      if (post) res.json(post);
      else res.json({ error: "can not find post with given id" });
    }
  });
});

module.exports = router;
