import React, { Component } from "react";
import axios from "axios";

class SingleBlog extends Component {
  state = {
    blog: {},
    loading: true,
    msg: ""
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/blogs/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({
          blog: res.data,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          msg: err.toJSON().message,
          loading: false
        });
      });
  }

  render() {
    let { title, body } = this.state.blog;
    if (this.state.loading) {
      return <p className="text-center"> loading ... </p>;
    } else if(this.state.msg) {
      return <p className="alert alert-danger text-center mt-5"> { this.state.msg } </p>
    } else {
      return (
        <div className="card mt-4">
          <h2 className="card-header"> {title} </h2>
          <div className="card-body">
            <p className="card-text">{body}</p>
          </div>
        </div>
      );
    }
  }
}

export default SingleBlog;
