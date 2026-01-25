const mongoose = require('mongoose');
const user= new mongoose.Schema({
    comment:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    created:{
        type:Date,
        default:Date.now()
    }
})
const review= mongoose.model("review",user);
module.exports= review;
