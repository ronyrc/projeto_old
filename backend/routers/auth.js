const express = require("express");
const controller = require("../controllers/auth");
const models = require("../models/");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET || "123abc";

//dependencias
const dependencias = {
  ...models,
  passport,
  jwt,
  jwtSecret
};

router.post("/login", controller.login.bind(null, dependencias));
router.post("/jwt", controller.jwt.bind(null, dependencias));

module.exports = router;
