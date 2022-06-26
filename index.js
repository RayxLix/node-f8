const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res) => res.send("hello anh em"));

// local host: 127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
