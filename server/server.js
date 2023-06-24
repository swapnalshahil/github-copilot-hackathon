const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;
const server = http.createServer(app);
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to the database!");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
