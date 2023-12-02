const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    // Read the index.html file
    const indexPath = path.join(__dirname, 'index.html');

    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        console.error(err);
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    // Handle other routes or resources here
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
