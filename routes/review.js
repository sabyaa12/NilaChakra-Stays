 const express = require("express");
 const router = express.Router({mergeParams: true}) ;
 const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js"); // require from the listing.js file from models folder 


const {validateReview, isLoggedIn , isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

 // REVIEW route
 //POST review route 
 router.post("/" ,isLoggedIn , validateReview, wrapAsync(reviewController.createReview));

 
 // DELETE review route 
 router.delete("/:reviewId" ,isLoggedIn, isReviewAuthor,  wrapAsync(reviewController.destroyReview));
 
 
 module.exports = router ;