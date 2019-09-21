import React, { Component } from "react";

export default class BlogCard extends Component {
  render() {
    let { title, body } = this.props;
    return (
      <div>
        <div className="card mb-2">
          <div className="card-body">
            <h2 className="card-title"> {title} </h2>
            <p className="card-text"> {body.slice(0, 50)} ... </p>
            <a href="#" className="btn btn-primary"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}
