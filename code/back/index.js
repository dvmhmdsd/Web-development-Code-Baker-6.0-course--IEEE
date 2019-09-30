const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/blogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log(err);
  });

const blogsRouter = require("./controllers/blogs");

const app = express();

app.use(express.json());

app.use(cors());




























































app.use("/blogs", blogsRouter);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
