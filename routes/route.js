const express = require("express");
const Message = require("../model/Message.model");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Inner Route is working!");
});

// Create a new message
router.post("/add", async (req, res) => {
  try {
    // Create a new Message document with data from the request body
    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    // Save the new message to the database
    const savedMessage = await newMessage.save();

    // Send a success response with the saved message
    res.status(201).json(savedMessage);
  } catch (err) {
    // Handle any errors that occur during the save process
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while saving the message." });
  }
});

module.exports = router;
