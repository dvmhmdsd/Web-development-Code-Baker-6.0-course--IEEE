const express = require("express");
const Blog = require("../models/Blog");

const app = express.Router();

app.get("/", (req, res) => {
  Blog.find({}).then((result, err) => {
    if (err) return err;
    res.send(result);
  });
});

app.post("/", (req, res) => {
  let { title, body, author } = req.body;

  let newBlog = new Blog({
    title,
    body,
    author
  });

  newBlog.save().then((result, err) => {
    res.status(201).send("blog added succcesssfully");
  });
});

app.get("/:id", (req, res) => {
  //   Blog.find({_id: req.params.id}).then((result, err) => {
  //       res.send(result)
  //   })
  Blog.findById(req.params.id).then((result, err) => {
    res.send(result);
  });
});

app.put("/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body).then((result, err) => {
    res.status(200).send("blog updated succcesssfully");
  });
});

app.delete("/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id).then(() => {
    res.status(200).send("blog removed succcesssfully");
  })
});

module.exports = app;
