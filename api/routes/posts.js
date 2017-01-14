"use strict";

const express = require('express')
const router = express.Router();

const Post = require('../models/post');

router.get('/by-subreddit/:subreddit', (req, res) => {
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.json(results);
	});
});

router.post('/posts', (req, res) => {
	var newPost = new Post(req.body);
	newPost.save((err, results) => {
		res.json(results);
	});
});

module.exports = router;