const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: { type: String, lowercase: true, unique: true, required: true },
});

const TagModel = mongoose.model("tag", TagSchema);

module.exports = {
  TagModel,
};
