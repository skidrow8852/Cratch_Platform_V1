const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StreamChatSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    liveId: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    content: {
        type: String
    }

},{timestamps : true});

const StreamChat = mongoose.model('StreamChat',StreamChatSchema);
module.exports = StreamChat;