const express = require("express");
const app = express();
const cors = require("cors");
const messageRouter = require("./routes/route");

// midlewares
const corsOptions = {
  origin: "https://responsive-prototype.onrender.com", // Allow specific origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Route is working!");
});

app.use("/api/v1/message", messageRouter);

module.exports = app;
