const express = require("express")
const router = express.Router()
const User = require('../models/User')

const {verifyAccessToken} = require('../helpers/ApiAccess')

// Add new user
router.post("/add",verifyAccessToken, async(req, res) => {
    try {
        const user = await new User(req.body).save()
        res.send(user)
    }
    catch(error) {
        res.send(error)
    }
})

// Get specific user
router.get("/:id", verifyAccessToken, async(req,res) => {
    try {
        const user = await User.findOne({userId : req.params.id})
        if(user == null)
            res.send({status : 'not found'});
            else {
                res.send(user)
            }
        
        
    } catch (error) {  
        res.send({status : 'not found'});
        
    }
})

// Get all Users
router.get("/", verifyAccessToken, async(req,res) => {
    try {
        const users = await User.find({}, { rewards: 0,about : 0,OwnedNfts:0,following : 0 ,createdAt:0,updatedAt:0});
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

// Get user profile
router.get("/profile/:id", verifyAccessToken, async(req,res) => {
    try {
        const users = await User.findOne({userId : req.params.id}, { rewards: 0,OwnedNfts:0,following : 0 ,createdAt:0,updatedAt:0});
        if(users == null)
            res.send({status : 'not found'});
            else {
                res.send(users)
            }
        
        
    } catch (error) {  
        res.send({status : 'not found'});
        
    }
})

// Edit user
router.put("/:id/edit", verifyAccessToken, async(req,res) => {
    try {
        const user = await User.findOneAndUpdate({userId : req.params.id}, req.body)
        res.send(user)
        
    } catch (error) {
        res.send(error)
    }
})


// Follow user
router.put("/follow/:id", verifyAccessToken,  async(req,res) => {
    try {
        const user = await User.findOneAndUpdate({userId : req.params.id}, {$push : {followers : req.body.value}},{ new: true })
        const user1 = await User.findOneAndUpdate({userId : req.body.value}, {$push : {following : req.params.id}},{ new: true })
            if(user && user1) {
                res.send({success : true})
              
            }
            
        
        
    } catch (error) {
        res.send(error)
    }
})

// Unfollow user
router.put("/unfollow/:id", verifyAccessToken,  async(req,res) => {
    try {
        const user = await User.findOneAndUpdate({userId : req.params.id}, {$pull : {followers : req.body.value}},{ new: true })
        const user1 = await User.findOneAndUpdate({userId : req.body.value}, {$pull : {following : req.params.id}},{ new: true })
        if(user && user1) {
            res.send({success : true})
        }
        
    } catch (error) {
        res.send(error)
    }
})


module.exports = router