const express = require('express');
const router = express.Router();
const Comments  = require("../models/Comments");



router.post("/saveComment", (req, res) => {

    const comment = new Comments(req.body)

    comment.save((err, comment) => {
        if (err) return res.json({ success: false, err })

        Comments.find({ '_id': comment._id })
            .populate('creator', 'userId ProfileAvatar username')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                res.status(200).json({ success: true, comment })
            })
    })

})

router.post("/getComments", (req, res) => {

    Comments.find({ "videoId": req.body.videoId })
        .populate('creator','userId ProfileAvatar username')
        .exec((err, comments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, comments })
        })

});




module.exports = router;