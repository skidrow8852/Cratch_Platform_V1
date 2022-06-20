const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: {type: String ,required: true, unique: true},
    username : String,
    rewards : {type : Number, default : 0},
    about : {type : String, default : 'Hello, welcome to my Cratch channel!'},
    ProfileCover : {type : String, default : 'https://bafybeie3mniojsxcxbvruv4hcfadymzl3c7dioj7jvffyr53rtelduys3a.ipfs.dweb.link/meta.jpeg'},
    ProfileAvatar : {type : String, default : 'https://bafybeifgsujzqhmwznuytnynypwg2iaotji3d3whty5ymjbi6gghwcmgk4.ipfs.dweb.link/profile-avatar.png'},
    isVerified : {type : Boolean, default : false},
    isOnline : {type : Boolean, default: false},
    OwnedNfts : [String],
    followers:[String],
    following : [String],

},{timestamps : true});

const User = mongoose.model('User',UserSchema);
module.exports = User;