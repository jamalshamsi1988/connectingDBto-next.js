import { Schema, model , models } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        minLength: 3,
    },
    age : {
        type : Number,
        min : 10,
        max:50
    } ,
    email : {
        type: String,
        required: true
    } ,
    address :{
        city : String,
        alle : String,
        zipCod:Number
    },
    courses:[String]
});

const User = models.User || model ("User" , userSchema);
export default User;