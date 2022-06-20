const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    content: {
        type: String
    }

},{timestamps : true});

const Comments = mongoose.model('Comments',CommentsSchema);
module.exports = Comments;