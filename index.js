const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    let html = fs.readFile("./main.html");
    res.end(html);
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello to my about page");
  }
});

server.listen(3000);
