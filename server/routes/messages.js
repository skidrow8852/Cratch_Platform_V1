const express = require("express")
const router = express.Router()
const Messages = require('../models/Messages')
const {verifyAccessToken} = require("../helpers/ApiAccess")

// Get all messages 

router.post("/get", verifyAccessToken, async(req, res,next) => {
    try {
        const { from, to } = req.body;
    
        const messages = await Messages.find({
          users: {
            $all: [from, to],
          },
        }).sort({ updatedAt: 1 });
    
        const projectedMessages = messages.map((msg) => {
          return {
            fromSelf: msg.sender === from,
            message: msg.message,
            createdAt : msg.createdAt
          };
        });
        res.json(projectedMessages);
      } catch (ex) {
        next(ex);
      }
})

// Add new message
router.post("/", verifyAccessToken, async(req, res,next) => {
    
    try {
        const { from, to, message } = req.body;
        const data = await Messages.create({
          message: message,
          users: [from, to],
          sender: from,
        });
    
        if (data) return res.json({ msg: "Message added successfully." });
        else return res.json({ msg: "Failed to add message to the database" });
      } catch (ex) {
        next(ex);
      }
})

module.exports = router