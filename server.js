const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const path = url.parse(req.url);
    res.setHeader("Access-Control-Allow-Origin", "https://wandbox.org/");
    if (path.path == null || path.path === "/") {
      const file = fs.readFileSync("index.html");
      res.end(file);
    } else {
      try {
        const file = fs.readFileSync(`.${path.path}`);
        res.end(file);
      } catch (err) {
        console.log(`${path.path} notfound.`);
        res.end();
      }
    }
  })
  .listen(8080);
