const express = require('express');
const  {home, register, login}  = require('../controller/auth-controller');
// const { register } = require('module');
const router = express.Router();
const validator= require("../validator/auth-validator");


// router.get("/",home);
router.route("/").get(home);



router.route("/register").post(validator.validateUserSignup,register);
router.route("/login").post(login);

module.exports=router; 
 