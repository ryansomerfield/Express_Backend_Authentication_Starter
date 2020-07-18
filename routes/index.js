const express = require("express");
const User = require("../models/User");
const router = express.Router();

//If no user, redirect to login
router.get("/*", (req, res, next) => {
  if (!req.user) {
    res.redirect(`${process.env.API_BASE}auth/`);
  } else {
    next();
  }
});

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/users", async (req, res) => {
  let data = await User.find({});
  res.json(data);
});

module.exports = router;
