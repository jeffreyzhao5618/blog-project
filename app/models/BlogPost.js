const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  posted_on: { type: Date, default: Date.now() },
  content: { type: String, required: true },
  tags: [String],
});

const BlogPostModel = mongoose.model("blogpost", BlogPostSchema);

module.exports = {
  BlogPostSchema,
  BlogPostModel,
};
