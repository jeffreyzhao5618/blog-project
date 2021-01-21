const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  posted_on: { type: Date, default: Date.now() },
  content: { type: String, required: true },
  tags: [String],
});

const AdminPostSchema = new Schema({
  title: { type: String },
  content: { type: String },
  tags: [String],
});

const BlogPostModel = mongoose.model("blogpost", BlogPostSchema);
const AdminPostModel = mongoose.model("adminpost", AdminPostSchema);

module.exports = {
  BlogPostSchema,
  BlogPostModel,
  AdminPostModel,
};
