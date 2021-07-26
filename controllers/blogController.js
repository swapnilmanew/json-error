// importing model
const Post = require("../models/postModel");

// all posts
const index = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
};

// show single post
const singlePost = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Post.findOne({ _id });
    res.json({ data: data });
  } catch (error) {
    res.json(error);
  }
};

// create post
const create = async (req, res) => {
  res.json(req.body);
  // try {
  //   const { title, content, postImage, userId } = req.body;
  //   res.json(req.body);
  //   const addPosts = await new Post({
  //     title: title,
  //     content: content,
  //     postImage: postImage,
  //     userId: userId,
  //   });
  //   addPosts
  //     .save()
  //     .then((result) => {
  //       return res.json(result);
  //     })
  //     .catch((err) => {
  //       return res.json(err);
  //     });
  // } catch (error) {
  //   res.json(error);
  // }
};

// edit post
const edit = async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Post.findOne({ _id });
    res.json({ data: data });
  } catch (error) {
    res.json(error);
  }
};

// update post
const update = async (req, res) => {
  try {
    const _id = req.params.id;
    const { title, content, postImage } = req.body;
    const data = await Post.findByIdAndUpdate(_id, {
      title: title,
      content: content,
      postImage: postImage,
    });
  } catch (error) {}
};

// delete post
const deletePost = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  index,
  singlePost,
  create,
  edit,
  update,
  deletePost,
};
