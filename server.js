const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const path = url.parse(req.url);
    if (path.path == null || path.path === "/") {
      fs.readFile("index.html", (err, file) => {
        res.end(file);
      });
    } else {
      fs.readFile(`.${path.path}`, (err, file) => {
        if (err) {
          console.log(`${path.path} notfound.`);
          res.end();
          return;
        }
        res.end(file);
      });
    }
  })
  .listen(8080, "127.0.0.1");
