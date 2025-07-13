const express = require("express");
const router = express.Router() ;
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js"); // require from the listing.js file from models folder 
const multer  = require("multer");
const {storage}  = require("../cloudConfig.js");
const upload = multer({storage}); // idhar save karega 
const {isLoggedIn , isOwner , validatelisting } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

// const {listingSchema } = require("../schema.js");
// const ExpressError = require("../utils/ExpressError.js"); // .. matlb parent directovry ke andar ja raha hai 


// "/"
router
    .route("/")
    .get(wrapAsync(listingController.index))  // Index route
     .post(isLoggedIn,upload.single('listing[image]'), validatelisting, wrapAsync(listingController.createListing)); // create route 


  //New route
router.get("/new",isLoggedIn ,listingController.renderNewForm );


//  "/:id"
router
.route("/:id")
.get( wrapAsync(listingController.showListing)) // show routes
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validatelisting, wrapAsync(listingController.updateListing)) // update route
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing)); //delete routes


// Edit route 
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router ;