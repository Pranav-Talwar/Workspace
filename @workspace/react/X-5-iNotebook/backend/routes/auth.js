const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "pranavtalwar@rocks";

const router = express.Router();

router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Name must be at least 3 characters").isLength({ min: 3 }),
    body("password", "Password must be at least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry, a user with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken });
  }
);

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").isLength({ min: 1 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please enter correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please enter correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
      console.log("Login successful");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal Server Error" }); }
  }
);

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" }); 
  }
});

module.exports = router;
