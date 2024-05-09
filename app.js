const express = require("express");
const app = express();
const cors = require("cors");
const messageRouter = require("./routes/route");

// midlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working!");
});

app.use("/api/v1/message", messageRouter);

module.exports = app;
