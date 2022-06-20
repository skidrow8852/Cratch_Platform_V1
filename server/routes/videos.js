const express = require("express")
const router = express.Router()
const Video = require('../models/Video')
const multer = require('multer')
const { getVideoDurationInSeconds } = require('get-video-duration')

const {verifyAccessToken} = require('../helpers/ApiAccess')



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4' || ext !== '.mov') {
            return cb(res.status(400).end('only supported video files are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single('file')


// Get video duration

router.post("/duration",verifyAccessToken, async(req, res) => {
    if(req.body.filePath) {
        var duration =await getVideoDurationInSeconds(req.body.filePath).then((duration) => {
        return duration
    })

    res.json({duration : duration})
    }

    

})

// Upload new videoFile

router.post("/upload",verifyAccessToken, async(req, res) => {
    try {
        
        upload(req, res, err => {
            if (err) {
               
                return res.json({ success: false, err })
            }

            return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
        })
    }
    catch(error) {
        res.send(error)
    }
})


// Upload new video
router.post("/",verifyAccessToken, async(req, res) => {
    try {
        const video = await new Video(req.body).save()
        res.send(video)
    }
    catch(error) {
        res.send(error)
    }
})

// Get specefic video
router.get("/:id",verifyAccessToken, async(req, res) => {
    try {
        const video =  await Video.findOne({videoId : req.params.id}).populate('creator','userId username ProfileAvatar isVerified isOnline followers')
        if(video == null)
        res.send({status : 'not found'});
        else {
            res.send(video)
        }

    }
    catch(error) {
        res.send({status : 'not found'});
    }
})


// Get all user video
router.get("/user/:id",verifyAccessToken, async(req, res) => {
    try {
        const video =  await Video.find({creator : req.params.id})
        if(video == null)
        res.send({status : 'not found'});
        else {
            res.send(video)
        }

    }
    catch(error) {
        res.send({status : 'not found'});
    }
})



// Get all videos
router.get("/",verifyAccessToken, async(req, res) => {
    try {
        const videos =  await Video.find({}).populate('creator','userId username ProfileAvatar isVerified isOnline followers')
        res.send(videos)

    }
    catch(error) {
        res.send(error)
    }
})




// edit video
router.put("/:id", verifyAccessToken, async(req,res) => {
    try {
        const video = await Video.findOneAndUpdate({videoId : req.params.id}, req.body,{ new: true })
        res.send(video)
        
    } catch (error) {
        res.send(error)
    }
})



module.exports = router