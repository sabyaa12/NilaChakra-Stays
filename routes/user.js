const express = require("express");
const router = express.Router();
const User  = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const usersController = require("../controllers/users.js");
//SIGN UP
router.route("/signup")
.get( usersController.renderSignupForm )
.post(wrapAsync(usersController.signup));

// LOGIN
router.route("/login")
.get( usersController.renderLoginForm)
.post(saveRedirectUrl , passport.authenticate("local" , { failureRedirect: '/login' , failureFlash: true } ) ,usersController.login); 


//logout
router.get("/logout" , usersController.logout );

module.exports = router ;