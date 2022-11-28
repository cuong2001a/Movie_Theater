const User = require("../models/auth");
const jwt = require("jsonwebtoken");

const createToken = _id => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3h" });
};
// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    res.cookie("t", token, { expire: new Date() + 9999 });
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signUpUser = async (req, res) => {
  const received = req.body;
  try {
    const user = await User.signup(received);

    //create a token
    const token = createToken(user._id);
    res.status(200).json({ message: "Register Success", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({
    message: "signup user",
  });
};

const logout = async (req, res) => {
  res.clearCookie("t");
  //  res.redirect('/signin');
  res.json({
    message: "Signout Success",
  });
};

module.exports = { signUpUser, loginUser, logout };
