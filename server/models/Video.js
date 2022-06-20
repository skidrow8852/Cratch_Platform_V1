const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    videoId: {type: String ,required: true, unique: true},
    creator : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    videoPath : {type : String},
    title : {type : String, required:true},
    description : {type : String, default : ''},
    thumbnail : {type : String},
    duration : {type : String},
    tags : [String],
    watchtime : {type:Number , default : 0},
    category : {type : String},
    visibility : {type:Number , default : 1},
    comments : {type:Number , default : 0},
    views : {type : Number, default : 0},
    likes : {type : Number, default: 0},
    comments : {type : Number, default: 0},
    dislikes : {type : Number, default: 0},
    isNFT : {type : Boolean, default : false},
    nftTotalMint : {type : Number, default: 0},
    nftsLeft : {type : Number, default: 0},
    nftOwners : [String]
},{timestamps : true});

const Video = mongoose.model('Video',VideoSchema);
module.exports = Video;