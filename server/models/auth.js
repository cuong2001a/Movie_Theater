import mongoose from "mongoose";
import crypto from 'crypto'
const {ObjectId} = mongoose.Schema
import {v4 as uuidv4} from 'uuid'
import { set } from "lodash";
const User = new mongoose.Schema({
    name:{
      type: String,
      trim: true,
      required: true,
      maxLength: 50
    },
    email:{
      type:String,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      maxLength:10,
    },
    address: {
      type: String,
      maxLength: 255,
    },
    role:{
      type: Number,
      default: 0
    },
    birthday: {
      type: String,
    }, 
    hashed_password: {
      type: String,
      required: true
    },
    salt: {
      type: String
    }
}, {timestamps: true})

User.virtual("password")
.set(function(password){
console.log('password :', password);
this.salt = uuidv4()
this.hashed_password = this.en
})

User.method = {
  authenticate: function(plainText){
    return this.encrytPassword(plainText) === this.hashed_password;
  },
  encrytPassword: function (password) {
    console.log('password :', password);
    if(!password) return '';
    try {
      return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
    } catch (error) {
      return '';
    }
  }
}
module.exports = mongoose.model("User", User)