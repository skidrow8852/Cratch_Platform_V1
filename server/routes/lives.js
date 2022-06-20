const express = require("express")
const router = express.Router()
const Live = require('../models/Live')
const StreamChat = require('../models/StreamChat')
const {verifyAccessToken} = require('../helpers/ApiAccess')



// Get all lives
router.get("/",verifyAccessToken, async(req, res) => {
    try {
        const videos =  await Live.find({}).populate('creator','userId username ProfileAvatar isVerified isOnline followers').sort({ createdAt: -1 })
        res.send(videos)

    }
    catch(error) {
        res.send(error)
    }
})

// Get user lives

router.get("/user/:id",verifyAccessToken, async(req, res) => {
    try {
        const live =  await Live.find({creator : req.params.id})
        if(live == null)
        res.send({status : 'not found'});
        else {
            res.send(live)
        }
    }
    catch(error) {
        res.send({status : 'not found'});
    }
})


// get all stream chats
router.get("/chat/:id",verifyAccessToken, async(req, res) => {
    try {
        const chat =  await StreamChat.find({liveId : req.params.id}).populate('creator', 'userId username ProfileAvatar')
      
            res.send(chat)
        }
    catch(error) {
        res.send({status : 'not found'});
    }
})



// post message to chat
router.post("/chat",verifyAccessToken, async(req, res) => {
    try {
        const chat =   await new StreamChat(req.body).save()
            res.send(chat)
        }
    catch(error) {
        res.send({status : 'not found'});
    }
})



// get specific live

router.get("/:id",verifyAccessToken, async(req, res) => {
    try {
        const live =  await Live.findOne({streamUrl : req.params.id}).populate('creator','userId username ProfileAvatar isVerified isOnline followers')
        if(live == null)
        res.send({status : 'not found'});
        else {
            res.send(live)
        }
    }
    catch(error) {
        res.send({status : 'not found'});
    }
})

// create new live

router.post("/new",verifyAccessToken, async(req, res) => {
    try {
        const user = await new Live(req.body).save()
        res.send(user)
    }
    catch(error) {
        res.send(error)
    }
})


// edit liveStream
router.put("/:id", verifyAccessToken, async(req,res) => {
    try {
        const live = await Live.findOneAndUpdate({_id : req.params.id}, req.body,{ new: true })
        res.send(live)
        
    } catch (error) {
        res.send(error)
    }
})


module.exports = router