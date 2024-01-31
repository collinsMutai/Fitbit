const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const salt = bcrypt.genSaltSync(12);
const SECRET = process.env.SECRET;

exports.SignUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (name === "" || email === "" || password === "") {
    return res.json({
      success: false,
      message: "Input field should not be empty.",
    });
  }

  const checkUser = await User.findOne({ email: email });
  if (checkUser) {
    return res.json({ message: "User already exists in database." });
  }
  try {
    let cart = {};
    for (let index = 0; index < 300; index++) {
      cart[index] = 0;
    }
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      cartItems: cart,
    });
    await user.save();
    res.json({ success: true, message: "user created", user: user._id });
  } catch (error) {
    res.status(422).json({ success: false, message: "User signup failed." });
  }
};

exports.LoginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === "" || password === "") {
    return res.json({
      success: false,
      message: "Input field should not be empty.",
    });
  }
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(422)
        .json({ success: false, message: "Wrong email or password" });
    }
    const doMatch = await bcrypt.compareSync(password, user.password);
    if (doMatch) {
      jwt.sign({ id: user._id }, SECRET, {}, (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token).status(200)
          .json({ success: true, id: user._id, token: token });
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Wrong email or password" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
