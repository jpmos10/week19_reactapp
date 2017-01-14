
import React, { Component } from 'react';
import axios from 'axios';

export default class NewPost extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(this)
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/posts', {
    title: this.state.name,
    content: this.state.text,
    subredditID: this.props.routeParams.subredditID,
    comments: []
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log(this.state);
    this.setState({ 
      name: "",
      text: ""
    });
  }

	render() {
    console.log(this.props)
		return (
			
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Form</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Name" className="form-control" value={this.state.name} id="name" onChange={this.handleChange} />
                  <input type="text"  placeholder="Text" className="form-control" value={this.state.text} id="text" onChange={this.handleChange} />
                  <button className="btn btn-primary" type="submit" > Submit </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

		);
	}
}