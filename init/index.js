const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; // from mongoose documentaions
main().then(()=>{  // then and catch function 
    console.log("connected to DB"); 
}).catch((err)=>{
    console.log(err);
});
async function  main() {
    await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
    await Listing.deleteMany({}) ;
   initData.data =  initData.data.map((obj) => ({...obj , owner:"686bf7ae7470ea52a5d7e018"}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
};
initDB();