const http = require('http');
const PORT = 3002;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Response from Server 2\n');
}).listen(PORT, () => console.log(`Server 2 running on port ${PORT}`));
