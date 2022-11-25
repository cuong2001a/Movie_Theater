const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  birthday: {
    type: String
  },
  phone: {
    type:String,
    maxLength:10
  },
  name: {
    type: String,
    maxLength: 50
  },
  address:{
    type: String,
    maxLength:255,
  },
  role:{
    type:Number,
    default: 0
  }
})

// static signup method

userSchema.statics.signup = async function(received) {
  const {email, password} = received
  const exists = await this.findOne({ email })

  //validation
  if(!email || !password) {
    throw Error('All fields must be filled')
  }
  
  if (!validator.isEmail(email)){
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }
  if (exists) {
    throw Error('Email already in use')
  }
  
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({...received, email, password: hash })
  console.log('user :', user);

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {
  
  if(!email || !password) {
    throw Error('All fields must be filled')
  }

  const user  = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match){
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)