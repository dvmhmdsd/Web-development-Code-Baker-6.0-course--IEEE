import React, { Component } from "react";

export default class AddBlog extends Component {
  state = {
    title: "",
    body: "",
    author: ""
  };
  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  handleSubmit = e => {
      e.preventDefault();
      
      console.log(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter title of the post"
              onChange={this.handleChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Body</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Type your post"
              name="body"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Author</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Author of the post"
              name="author"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div className="preview">
            <p> {this.state.title} </p>
            <p> {this.state.body} </p>
            <p> {this.state.author} </p>
        </div>
      </div>
    );
  }
}
