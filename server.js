const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Set header content type
  res.setHeader("Content-Type", "application/json");

  // Read data.json file
  fs.readFile(".data.json", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(JSON.stringify({ message: "Internal server error" }));
      return;
    }

    // Send data from data.json file
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
