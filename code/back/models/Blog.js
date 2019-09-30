const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String
});

let Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
