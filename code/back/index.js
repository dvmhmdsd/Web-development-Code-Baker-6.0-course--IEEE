// write a simple log
console.log("Hello, World");

// the global object
console.log(global);

// Modules import the name varian=ble from the "./module.js"
const dev = require("./module");
console.log(dev.job);
dev.name("Dev");

// the Path module
const path = require("path");

console.log(path.parse(__dirname));

// the OS module
const os = require("os");

console.log(
  `The total memory: ${os.totalmem()} and the free memory: ${os.freemem()}`
);

// Event Emitter
const event = require("events");

let customEvent = new event.EventEmitter();

customEvent.on("hi", data => {
  console.log(data); // 12
});

customEvent.emit("hi", 12);

// FS module
const fs = require("fs");

fs.readFileSync("file.txt", "utf8"); // get the content of the file synchronously

fs.readFile("file.txt", "utf8", (err, data) => {
  // get the content of the file asynchronously
  fs.writeFile("file2.txt", data, () => console.log("File created."));
});

// HTTP module
const http = require("http");

// create a server
let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home Page");
  }

  if (req.url === "/blogs") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Blog page");
  }

  // ....
});

// listen to the port 3000
server.listen(3000);
console.log("server is listening on port 3000");
