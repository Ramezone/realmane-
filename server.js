const http = require('http');

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
