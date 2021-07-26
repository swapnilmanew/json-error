const mongoose = require("mongoose");

const postModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    postImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postModelSchema);
module.exports = Post;
