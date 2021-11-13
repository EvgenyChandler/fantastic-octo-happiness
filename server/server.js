require("dotenv").config();
const express = require("express");
// const cors = require("cors");

const server = express();

const PORT = process.env.PORT || 8000;

server.use(express.json());


server.listen(PORT, async () => {
  try {
    console.log(`Server has been started on PORT: ${PORT} ...`);
  } catch (error) {
    console.error(`Server error`, error);
  }
});
