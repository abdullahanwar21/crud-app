const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name : {
        required : true,
        type : String
    } ,
    email : {
        required : true,
        type : String
    },
    age : {
        required : true,
        type : Number
    }
});

module.exports = mongoose.model("Users" , UserSchema);