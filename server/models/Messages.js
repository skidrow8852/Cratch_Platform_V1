const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    message: {
       type: String, required: true
    },
    users: Array,
    sender: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", MessageSchema);