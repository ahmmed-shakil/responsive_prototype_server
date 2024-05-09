const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
