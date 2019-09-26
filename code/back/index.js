const express = require("express");
const cors = require("cors");

const blogsRouter = require("./controllers/blogs");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/blogs", blogsRouter);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
