const express = require("express");
const app = express();
const port = 5000;

app.get("/api/hello", (req, res) => {
  res.send("Hello from the back-end!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
