const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
  },
  { collection: "posts" }
);

const Post = model("Post", PostSchema);
module.exports = Post;
