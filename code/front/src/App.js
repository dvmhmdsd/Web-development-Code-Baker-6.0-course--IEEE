import React, { Component } from 'react';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import AddBlog from './components/AddBlog';

export default class App extends Component {
  componentDidMount() {
    console.log("component mounted")
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <BlogList />
        <AddBlog />
      </div>
    )
  }
}
