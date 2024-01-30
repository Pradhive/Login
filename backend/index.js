const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const RegisterModel = require("./model/register");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.CONNECTION_STRING);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  RegisterModel.findOne({ username: username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userId: user._id }, process.env.JWT, {
            expiresIn: "1d",
          });
          res.json({ token, message: "Successfully Logged in" });
        } else {
          res.json("Password Incorrect");
        }
      });
    } else {
      res.json("No User Exist. Need to Signup");
    }
  });
});

app.post("/register", async (req, res) => {
  const { emailaddress, password } = req.body;
  const existingUser = await RegisterModel.findOne({
    emailaddress: emailaddress,
  });

  if (existingUser) {
    return res.status(400).json("Email address is already registered");
  }
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json(err);
    }
    RegisterModel.create({ ...req.body, password: hashedPassword })
      .then((user) => {
        const token = jwt.sign({ userId: user._id }, process.env.JWT, {
          expiresIn: "1d",
        });
        res.json({ token, message: "Successfully Registered" });
      })
      .catch((err) => res.json(err));
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Runnning on ${process.env.PORT}`);
});
