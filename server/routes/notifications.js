const express = require("express")
const router = express.Router()
const Notifications = require('../models/Notifications')
const {verifyAccessToken} = require("../helpers/ApiAccess")

// Create new notification 

router.post("/add", verifyAccessToken, async(req, res,next) => {
    try {
        const { from, to ,type,username} = req.body;
    
        const messages = await Notifications.create({
          from : from,
          to : to,
          type: type,
          username : username
        })
    
        res.json(messages);
      } catch (ex) {
        next(ex);
      }
})

// Get user notifications
router.get("/:id", verifyAccessToken, async(req, res,next) => {
    
    try {
        const data = await Notifications.find({
          to : req.params.id
        }).sort({ updatedAt: 1 });
        res.json(data);
      } catch (ex) {
        next(ex);
      }
})


router.delete("/:id", verifyAccessToken, async(req, res,next) => {
    
    try {
        const data = await Notifications.deleteMany({
          to : req.params.id
        });
        res.json(data);
      } catch (ex) {
        next(ex);
      }
})

router.put("/:id", verifyAccessToken, async(req, res,next) => {
    
  try {
      const data = await Notifications.updateMany({
        to : req.params.id
      },{$set :{isRead:true}});
      res.json(data);
    } catch (ex) {
      next(ex);
    }
})


module.exports = router