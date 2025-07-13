if(process.env.NODE_ENV != "production"){
require("dotenv").config(); 
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ExpressError = require("./utils/ExpressError.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport =  require("passport");
const LocalStrategy  =  require("passport-local");
const User = require("./models/user.js");


const listingRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dburl = process.env.ATLASDB_URL;

main()
    .then(() => {  // then and catch function 
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dburl);
}

app.engine("ejs", ejsMate);
app.set("view engine", "ejs"); // for ejs 
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));// sara data pass ho paye , jo req ko ja raha hai ( show wale mein)
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const store = MongoStore.create ({
    mongoUrl : dburl,
    crypto:{
    secret: process.env.SECRET ,
    },
    touchAfter: 24 * 3600 , // seconds pe store hota hai

});

store.on("error" ,()=>{
    console.log("ERROR IN THE MONGO SESSION STORE" , err);
});

const sessionOption = {
    store:store,
    secret : process.env.SECRET,
    resave : false , 
    saveUninitialized : true ,
    cookie: {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000 ,
        maxAge : 7 * 24 * 60 * 60 * 1000 ,
        httpOnly : true ,
    },
};


app.use(flash());
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//local ke liye
app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user ;
   // console.log(res.locals.success);
    next();
});


app.use("/listings", listingRouter);
 app.use("/listings/:id/reviews", reviewsRouter);
 app.use("/", userRouter);


app.all("*", (req, res, next) => {  //agar upar kisi incoming request se match nahi hua to , ye wala kaam  karega and error dega 
    next(new ExpressError(404, "page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err; // idhar se statuscode niakala jayega and phir usee send kiya jayega 
    res.status(statusCode).render("error.ejs", { message });
    // res.status(statusCode).send(message);  // statuscode set hoga and message se send hoga 
    //res.send("something went wrong");  
});

app.listen(8000, () => {
    console.log("server is listening to 8000");
});

