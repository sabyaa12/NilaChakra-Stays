const { models } = require("mongoose");
const Listing = require("../models/listing.js");
const axios = require("axios");
const ExpressError = require("../utils/ExpressError");

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        }).populate("owner");
    
    if (!listing) {
        req.flash("error", "listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    
    console.log(listing);
    res.render("listings/show.ejs", { listing, mapApiKey: process.env.MAP_API_KEY });
};

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    
    console.log("Creating listing for location:", newListing.location);
    console.log("MAP API KEY is: ", process.env.MAP_API_KEY);
    
    let fetchUrl = `https://api.olamaps.io/places/v1/geocode?address=${newListing.location}&language=English&api_key=${process.env.MAP_API_KEY}`;
    let data = await axios.get(fetchUrl);
    let { lng, lat } = data.data.geocodingResults[0].geometry.location;
    newListing.geometry = { type: "Point", coordinates: [lng, lat] };
    
    await newListing.save();
    
    req.flash("success", "New Listing created");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash("error", "listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    
    if (!listing) {
        req.flash("error", "listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", " Listing deleted! ");
    res.redirect("/listings");
};