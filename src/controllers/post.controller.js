// services/post.service.js
// const Post = require('../models/post.model');
const postServices = require("./../services/post.service");
// const postServices = require("./../services/post.service");

exports.createPost = async (req, res, next) => {
  try {
    const { userId, categoryname, price, location } = req.body;
    const post = await postServices.createPost(userId, categoryname, price, location);
    return res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

exports.editPost = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const { categoryname, price, location } = req.body;
    const updatedPost = await postServices.updatePost(postId, categoryname, price, location);
    return res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    await postServices.deletePost(postId);
    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await postServices.getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await postServices.getPostById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};
