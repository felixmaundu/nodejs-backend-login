const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

// Create a new post
router.post('/create', postController.createPost);

// Get all posts
router.get('/get', postController.getPosts);

// Get a specific post by ID
router.get('/get/:postId', postController.getPostById);

// Update a post by ID
// router.put('/update/:postId', postController.editPost);

// Delete a post by ID
router.delete('/delete/:postId', postController.deletePost);

module.exports = router;
