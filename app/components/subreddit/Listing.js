import React, { Component } from 'react';

import axios from 'axios';
import ListItem from './ListItem';

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
		}
	}

	componentDidMount() {
<<<<<<< HEAD
		axios.get('/posts/' + this.props.params.subredditId).then(posts => {
=======
		axios.get('/posts/by-subreddit/' + this.props.params.subredditId).then(posts => {
>>>>>>> 546d0bac8beb936c35f9a36d3ee08dc96abda6fb
			this.setState({ posts: posts.data });
		});
	}

<<<<<<< HEAD
	componentDidUpdate() {
		axios.get('/posts/' + this.props.params.subredditId).then(posts => {
			this.setState({ posts: posts.data });
		});
=======
	componentWillReceiveProps(nextProps) {
		if (this.props.params.subredditId !== nextProps.params.subredditId) {
			axios.get('/posts/by-subreddit/' + nextProps.params.subredditId).then(posts => {
				this.setState({ posts: posts.data });
			});
		}
>>>>>>> 546d0bac8beb936c35f9a36d3ee08dc96abda6fb
	}

	render() {
		return (
			<ul>
				{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
			</ul>
		);
	}
}
