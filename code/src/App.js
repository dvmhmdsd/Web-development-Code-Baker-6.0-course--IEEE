import React, { Component } from "react";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Blog App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Add a new Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container my-5">
          <AddBlog />
          <Blogs />
        </div>
      </div>
    );
  }
}
