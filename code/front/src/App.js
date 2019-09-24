import React, { Component } from 'react'
import Navbar from './components/Navbar'
import BlogList from './components/BlogList'
import AddBlog from './components/AddBlog'

export default class App extends Component {
    state = {
        name: "mohamed",
        age: 2
    }
  render() {
    return (
      <div>
        <Navbar />
        <BlogList />
        <AddBlog />
      </div>
    )
  }
}
