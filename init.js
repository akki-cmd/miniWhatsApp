const mongoose = require("mongoose");
const Chat = require("./models/chat");
// const {faker} = require("@faker-js/faker");

mongoose.connect("mongodb://localhost:27017/test")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => console.log("Error connecting to MongoDB:", err));

const messages = [
    { from: "Ram Transport",      to: "Shyam Logistics",   msg: "Pickup at 10:00 AM from warehouse A." },
    { from: "Sunrise Couriers",   to: "Green Mart",        msg: "Deliver parcel #A124 by 4 PM." },
    { from: "Aman Freight",       to: "Veer Builders",     msg: "Materials arriving tomorrow morning." },
    { from: "Bikaner Coldchain",  to: "Dairy Farm",        msg: "Chilled milk crate — handle with care." },
    { from: "Express Movers",     to: "Prakash Electronics", msg: "Fragile: Place upright only." },
    { from: "BlueLine Shippers",  to: "City Grocers",      msg: "Delay expected due to heavy traffic." },
    { from: "Kumar Logistics",    to: "Rathi Traders",     msg: "Confirm loading bay on arrival." },
    { from: "Desert Haulage",     to: "Kapurisar Farm",    msg: "Unload at gate 3; call when 5 km away." },
    { from: "Rapid Dispatch",     to: "M/s Sharma",        msg: "Invoice enclosed; collect signature." },
    { from: "NorthStar Cargo",    to: "Oceanic Exports",   msg: "Customs docs attached, check before dispatch." }
  ];
  
Chat.insertMany(messages)
  .then(res => console.log("Saved to mongodb: ", res))
  .catch(err => console.log("Error in bulk save: ", err));


  



