const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({ // listing schema 

    title: 
    {
       type: String,
       required : true,
    },
    description: String,
    image :{ 
        url: String ,
        filename: String,
    },
    price : Number,
      category:{
            type: String ,
            enum: ["Trending","Rooms","Iconic Cities" , "Mountains" , "castles" ,"Amazing Pool" ,"Camp" , "Farm" , "Artic"],
        },
    location: String,
    country: String,
    reviews : [
      {
         type: Schema.Types.ObjectId,
         ref: "Review",
      },
    ],owner: {
         type: Schema.Types.ObjectId,
         ref: "User" ,
      },
          geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
      
});

listingSchema.post("findOneAndDelete" , async(listing)=> {
   if(listing){
   await Review.deleteMany({reviews : {$in : listing.reviews}});
   }
});
const Listing = mongoose.model("listing" , listingSchema);
module.exports = Listing;