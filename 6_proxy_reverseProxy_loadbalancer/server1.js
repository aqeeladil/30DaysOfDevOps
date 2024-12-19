const http = require('http');
const PORT = 3001;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Response from Server 1\n');
}).listen(PORT, () => console.log(`Server 1 running on port ${PORT}`));
