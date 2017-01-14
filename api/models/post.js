const mongoose = require('mongoose');

const Post = new mongoose.Schema({
<<<<<<< HEAD
	author: String,
	comments: Array,
	content: String,
	subreddit: mongoose.Schema.Types.ObjectId,
	subredditId: String,
	title: String,

	created_at: Date,
	updated_at: Date
=======
	comments: Array,
	content: String,
	subredditId: String,
	title: String
>>>>>>> 546d0bac8beb936c35f9a36d3ee08dc96abda6fb
});

module.exports = mongoose.model('post', Post);
