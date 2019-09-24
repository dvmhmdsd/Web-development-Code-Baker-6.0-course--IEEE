import React, { Component } from 'react'
import BlogCard from './BlogCard'

export default class BlogList extends Component {
    state = {
        blogs: [
            {
                title: "Book1",
                body: "awesome book",
                author: "mohamed"
            },
            {
                title: "Book2",
                body: "awesome book",
                author: "mohamed"
            },
            {
                title: "Book3",
                body: "awesome book",
                author: "mohamed"
            }
        ]
    }
  render() {
    return (
      <div>
        { this.state.blogs && this.state.blogs.map((blog) => {
            return (
                <BlogCard key={blog.title} data={blog} />
            )
        }) }
      </div>
    )
  }
}
