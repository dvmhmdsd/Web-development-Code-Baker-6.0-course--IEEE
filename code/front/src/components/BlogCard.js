import React, { Component } from "react";

export default class BlogCard extends Component {
  render() {
    const { id, title, body } = this.props.blog;
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text"> {body} </p>
            <a href="/" className="btn btn-primary">
              See More
            </a>
            <a
              onClick={() => {
                this.props.onDelete(id);
              }}
              href="#"
              className="btn btn-danger"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}
