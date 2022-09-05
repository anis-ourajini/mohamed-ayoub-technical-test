const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  date: { type: String, default: null },
  text: { type: String },
  img: { type: String },
});

module.exports = mongoose.model("post", postSchema);