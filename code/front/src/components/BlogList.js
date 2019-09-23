import React, { Component } from "react";
import BlogCard from "./BlogCard";

export default class BlogList extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: "Blog 1",
        body: "Awesome Bloge",
        author: "Mohamed"
      },
      {
        id: 2,
        title: "Blog 2",
        body: "Awesome Bloge",
        author: "Mohamed"
      },
      {
        id: 3,
        title: "Blog 3",
        body: "Awesome Bloge",
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
                key={blog.id}
                title={blog.title}
                body={blog.body}
                author={blog.author}
              />
            );
          })}
      </div>
    );
  }
}
