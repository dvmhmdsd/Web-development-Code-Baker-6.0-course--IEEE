const express = require("express");

const app = express.Router();

let blogs = [
  {
    id: 1,
    name: "title 1"
  },
  {
    id: 2,
    name: "title 2"
  }
];

app.get("/", (req, res) => {
  res.send(blogs);
});

app.post("/", (req, res) => {
  blogs.push(req.body);
  res.status(201).send("Blog added successfully");
});

app.get("/:id", (req, res) => {
  let blog = blogs.find(blog => {
    return parseInt(req.params.id) === blog.id;
  });

  if (blog) {
    res.send(blog);
    return;
  }

  res.status(404).send("The id not found");
});

app.put("/:id", (req, res) => {
  let blog = blogs.find(blog => {
    return parseInt(req.params.id) === blog.id;
  });

  if (blog) {
    blog.name = req.body.name;
    res.status(200).send("Blog updated successfully");
    return;
  }

  res.status(404).send("Not found");
});

app.delete("/:id", (req, res) => {
  let blog = blogs.find(blog => {
    return parseInt(req.params.id) === blog.id;
  });

  if (blog) {
    let index = blogs.indexOf(blog);
    blogs.splice(index, 1);
    res.status(200).send("Blog removed successfully");
    return;
  }

  res.status(404).send("Not found");
});

module.exports = app;
