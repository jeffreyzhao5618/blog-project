const mongoose = require("mongoose");
const express = require("express");
const tg = require("../models/Tag");
const router = express.Router();

// get all tags
router.get("/", (req, res) => {
  tg.TagModel.find((err, tags) => {
    if (err) {
      console.log(err);
      res.json({ message: "error getting tags" });
    } else {
      res.json(tags);
    }
  });
});

// get one tag by id
router.get("/id/:id", (req, res) => {
  tg.TagModel.findById(req.params.id, (err, tag) => {
    if (err) {
      console.log(err);
      res.json({ message: "error getting tag" });
    } else {
      res.json(tag);
    }
  });
});

// get one tag by name
router.get("/name/:name", (req, res) => {
  tg.TagModel.findOne({ name: req.params.name }, (err, tag) => {
    if (err) {
      console.log(err);
      res.json({ message: "error getting tag" });
    } else {
      res.json(tag);
    }
  });
});

// create tag
router.post("/:name", (req, res) => {
  tag.TagModel.create({ name: req.params.name.toLowerCase() }, (err, tag) => {
    if (err) {
      console.log(err);
      res.json({ message: "error creating tag" });
    } else {
      res.json(tag);
    }
  });
});

// delete tag by id
router.delete("/:id", (req, res) => {
  tag.TagModel.findByIdAndDelete(req.params.id, (err, tag) => {
    if (err) {
      console.log(err);
      res.json({ message: "error deleting tag" });
    } else {
      res.json(tag);
    }
  });
});

module.exports = router;
