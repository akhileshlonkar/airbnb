const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}

const a=async()=>{

    await listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'6962a1bc665799670268429d'}));
    await listing.insertMany(initData.data);
    console.log("done");
};
a();  
console.log("done");  