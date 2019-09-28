import React, { Component } from 'react'
import BlogCard from './BlogCard'

import axios from 'axios';

export default class BlogList extends Component {
    state = {
        blogs: []
    }

    componentDidMount () {
      axios.get("http://localhost:4000/blogs").then(res => {
        this.setState({
          blogs: res.data
        });
      })
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
