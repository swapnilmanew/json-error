const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;

// database
require("./db/connection");

app.post("/add", (req, res) => {
  res.send(req.body);
});

// router
const router = require("./routes/blogRoutes");
app.use("/blog/", router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
