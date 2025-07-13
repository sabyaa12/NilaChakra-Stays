const Review = require("../models/review.js");
const Listing = require("../models/listing.js"); // require from the listing.js file from models folder 


module.exports.createReview = async(req,res) => {
    let listing = await Listing.findById(req.params.id);
     let newReview = new Review(req.body.review); 
     newReview.author = req.user._id;
     console.log(newReview);
     listing.reviews.push(newReview);// harr listing page mai show karega individualy
 
     await newReview.save();
     await listing.save();
    req.flash("success", "New Review created" );

     // console.log("new review saved "); // terminal ke liye 
     // res.send("new review saved"); // website ke liye
 
     res.redirect(`/listings/${listing._id}`); // submit karne ke badd bhi wohi same page par ajaoge again
 };

 module.exports.destroyReview = async(req,res) => {
     let {id , reviewId } = req.params;
    await Listing.findByIdAndUpdate(id , {$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!" );
 
     res.redirect(`/listings/${id}`);
 };