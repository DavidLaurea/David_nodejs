const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello, Node.js!');
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end('About Page');
  } else if (req.url === '/contact') {
    res.writeHead(200);
    res.end('Contact Page');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
