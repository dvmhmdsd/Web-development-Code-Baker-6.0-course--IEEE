import React, { Component } from "react";
import BlogCard from "./BlogCard";

export default class Blogs extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: "Blog 1",
        body: "Awesome Blog",
        author: "Mohamed"
      },
      {
        id: 2,
        title: "Blog 2",
        body: "Awesome Blog",
        author: "Mohamed"
      },
      {
        id: 3,
        title: "Blog 3",
        body: "Awesome Blog",
        author: "Mohamed"
      },
      {
          id: 4,
        title: "Blog 4",
        body: "Awesome Blog",
        author: "Mohamed"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.blogs &&
          this.state.blogs.map(blog => {
            return (
              <BlogCard
                title={blog.title}
                body={blog.body}
                key={blog.id}
              />
            );
          })}
      </div>
    );
  }
}
