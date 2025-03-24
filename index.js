var http = require("http");
var fs = require("fs");
const url = require("url");

http
  .createServer(async (req, res) => {
    const url = url.parse(req.url, true);

    let filename;
    if (url.pathname === "/") {
      filename = "./pages" + "/index.html";
    } else {
      filename = "./" + url.pathname;
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, {
          "Content-Type": "text/html",
        });
        return res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);
