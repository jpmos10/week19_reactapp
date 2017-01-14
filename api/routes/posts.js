const express = require('express')
const router = express.Router();

const Post = require('../models/post');

<<<<<<< HEAD
router.get('/:subreddit', (req, res) => {
=======
router.get('/by-subreddit/:subreddit', (req, res) => {
>>>>>>> 546d0bac8beb936c35f9a36d3ee08dc96abda6fb
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.json(results);
	});
});

module.exports = router;
