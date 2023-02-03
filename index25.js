// this is creating custom backend that Response auto on different file

// video 67 start here

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');


const home = fs.readFileSync('home.html');
const content = fs.readFileSync('content.html');
const about = fs.readFileSync('about.html');


const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(url == '/'){
    res.end(home);
  } 
  else if(url == '/about'){
    res.end(about);
  } 
  else if(url == '/content'){
    res.end(content);
  } 
  else{
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
  }

//   res.end('Hello World jani');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


