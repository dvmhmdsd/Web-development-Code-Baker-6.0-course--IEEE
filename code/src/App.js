import React, { Component } from "react";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container my-5">
          <AddBlog />
          <Blogs />
        </div>
      </div>
    );
  }
}
