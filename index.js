const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.API_PORT || 5004;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});