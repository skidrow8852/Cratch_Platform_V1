const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LiveSchema = new Schema({
    creator : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type : String, required : true},
    description : {type : String, default : ''},
    category : String,
    thumbnail : {type : String, default : ''},
    tags : [String],
    visibility : {type : Number, default : 1},
    streamUrl : String,
    numOfmessages : {type : Number, default : 1},
    streamKey : String,
    playbackUrl : String,
    currentlyWatching : {type : Number, default : 1},
    thumbnail: String,
    likes : {type: Number, default : 0},
    views : {type: Number , default : 0},
    chat : {type: mongoose.Schema.Types.ObjectId, ref: 'StreamChat'},

},{timestamps : true});

const Live = mongoose.model('Live',LiveSchema);
module.exports = Live;