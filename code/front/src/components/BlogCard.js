import React, { Component } from "react";

import { Link} from "react-router-dom";

export default class BlogCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title"> {this.props.data.title} </h5>
            <p className="card-text">{this.props.data.body}</p>
            <Link to={`/blogs/${this.props.data.id}`} className="btn btn-primary">
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
