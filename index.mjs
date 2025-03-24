import fs from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 202;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 202;

      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 202;

      break;
    default:
      path += "404.html";
      res.statusCode = 404;

      break;
  }

  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
