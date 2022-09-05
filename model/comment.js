const mongoose = require("mongoose");
const user = require("./user");

const commentSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  author: user,
  date: { type: String, default: null },
  text: { type: String },
  reaction: { type: String },
});

module.exports = mongoose.model("post", commentSchema);