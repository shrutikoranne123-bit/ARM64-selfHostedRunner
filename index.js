const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from ARM64 demo to SHRUTI\n");
}).listen(3000, () => console.log("Running on port 3000"));