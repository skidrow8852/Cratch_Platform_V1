const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Notification = new Schema({
    from : String,
    to : {type : String, default : ''},
    username : {type : String, default : ''},
    type : String,
    date : {type: Date , default : () => Date.now()},
    isRead : {type: Boolean, default: false}

},{timestamps : true});

const Notifications = mongoose.model('Notifications',Notification);
module.exports = Notifications;