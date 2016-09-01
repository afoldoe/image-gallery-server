const app = require('./app');
const http = require('http');
const port = process.env.PORT || 3000;
require('./mongoose-setup');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server running at', port);
});

module.exports = server;