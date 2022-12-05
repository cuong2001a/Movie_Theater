const User = require('../models/auth')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');
// login user
export const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const accessToken = await jwt.sign(user.email, process.env.ACCESS_TOKEN)
    const refreshToken = await jwt.sign(user.email, process.env.REFRESH_TOKEN)

    res.cookie('accessToken', accessToken, { expires: new Date(Date.now()+3000), httpOnly: true})
    res.cookie('refreshToken', refreshToken)
    res.status(200).json({email})
  } catch (error) {
  console.log('error :', error);
    res.status(400).json({error: error.message})
  }
} 

// signup user
export const signUpUser = async (req, res) =>{
  const received = req.body
  try {
    const user = await User.signup(received)
    res.status(200).json({ message:"Register Success",user})
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
  res.json({
    message: 'signup user'
  })
}

export const logout = (req, res) => {
  res.clearCookie();
  res.json({
      message: "Signout Success"
  })
}

export const refreshToken = (req, res) => {
  const refresh = req.body.token
  if(!refresh){
    res.status(400).json({message: 'refresh khong hop le'})
  }else{
    jwt.verify(refresh, process.env.REFRESH_TOKEN, (err, data)=> {
      if(err) res.status(403).json({message: 'refresh that bai'})
      const accessToken = jwt.sign(data._id, process.env.ACCESS_TOKEN)
      res.cookie('accessToken', accessToken)
    })
  }
}

export const forgotPassword = async(req,res) => {
    const {email} = req.body
    User.findOne({email: email}).then(data => {
    console.log('data :', data);
      if(!data){
        res.status(200).json({
          message: "Email not found"
        })
      }else{
        const email1 = data.email
        const resetPwToken = jwt.sign(
          {email: email1},
          process.env.RESET_FW_TOKEN,
          {
            expiresIn:'15m'
          }) 
        const transposter = nodemailer.createTransport({
          service: 'gmail',
          auth:{
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
          }
        })
        const mailOptions = {
          from :process.env.MAIL_USERNAME,
          to: data.email,
          subject: "Forgot Password",
          html: `<p>Click<a href="http://localhost:3000/reset-password?id=${data._id}&&token=${resetPwToken}">here</a><p/>`
        }
        transposter.sendMail(mailOptions, function(err, info){
          if(err){
          console.log('err :', err);
            res.status(400).json({message: err})
          }else{
            console.log("Message.sent "+ info.response);
            res.status(200).json({
              message: "Gui mail thanh cong"
            })
          }
        })
        }
    })
}

export const resetFwPassword = async(req,res)=>{
  try {
    const data = await User.findById(req.params.id)
    const resetPassword = req.body.resetPassword
    if(!data){
      return res.status(400).json({ message: "da het han token. Vui long thuc hien lai :))"})
    }else{
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(resetPassword, salt)
      const result = await User.updateOne({email: data.email},{password: hash})
      console.log('result :', result);
    }
  } catch (error) {
    console.log('error :', error);
    res.status(400).json({
      message: "Cap nhat that bai vui long thuc hien lai"
    })
  }
}