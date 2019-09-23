import React, { Component } from "react";

export default class AddBlog extends Component {
  state = {
    title: "",
    body: "",
    author: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    // TODO: send data to server
  };

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
              placeholder="Enter title"
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Author</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="author"
              placeholder="Author"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Body</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="body"
              rows={3}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Blog
          </button>
        </form>

        <div>
          <p> title: {this.state.title} </p>
          <p> body: {this.state.body} </p>
          <p> author: {this.state.author} </p>
        </div>
      </div>
    );
  }
}
