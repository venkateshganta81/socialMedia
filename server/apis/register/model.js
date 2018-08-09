let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let userDetails = new mongoose.Schema({
    name : String,
    email : String,
    mobile : Number,
    isVerified : { type : Boolean , default: false },
    otp : String,
    password : String,
    gender : String,
    dob : Date
},{
    timestamps : true
});

let userModel = mongoose.model('users',userDetails);

module.exports = userModel;