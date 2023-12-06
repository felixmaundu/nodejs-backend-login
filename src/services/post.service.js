// services/post.service.js
const Post = require('../models/post.model');

async function createPost(userId, categoryname, price, location) {
  const post = await Post.create({
    userId,
    categoryname,
    price,
    location,
  });
  return post;
}

async function getPosts() {
  const posts = await Post.findAll();
  return posts;
}

async function getPostById(postId) {
  const post = await Post.findByPk(postId);
  return post;
}

async function updatePost(postId, categoryname, price, location) {
  const post = await Post.findByPk(postId);
  if (!post) throw new Error('Post not found');
  post.categoryname = categoryname;
  post.price = price;
  post.location = location;
  await post.save();
  return post;
}

async function deletePost(postId) {
  const post = await Post.findByPk(postId);
  if (!post) throw new Error('Post not found');
  await post.destroy();
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
