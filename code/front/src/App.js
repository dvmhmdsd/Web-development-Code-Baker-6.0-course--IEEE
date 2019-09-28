import React, { Component } from 'react'


import { BrowserRouter, Route } from "react-router-dom";


import Navbar from './components/Navbar'
import BlogList from './components/BlogList'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

export default class App extends Component {
    state = {
        name: "mohamed",
        age: 2
    }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={BlogList} />
          <Route exact path="/blog/new" component={AddBlog} />
          <Route exact path="/blogs/:id" component={SingleBlog} />
        </div>
      </BrowserRouter>
    )
  }
}
