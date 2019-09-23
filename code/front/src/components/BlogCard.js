import React, { Component } from "react";

export default class BlogCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> {this.props.title} </h5>
            <p className="card-text"> {this.props.body} </p>
            <a href="#" className="btn btn-primary">
              See More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
