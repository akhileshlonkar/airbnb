// getting-started.js
const mongoose = require('mongoose');
const user= new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    image : {
        type: String,
        default:"https://www.freepik.com/free-vector/hotel-building-tropical-country-with-palms-cartoon-icon_17232739.htm#fromView=keyword&page=1&position=10&uuid=a754b13f-4f90-496c-9326-ce3c85b88379&query=Hotel+3d",
        set: (v)=> v===""?"https://www.freepik.com/free-vector/hotel-building-tropical-country-with-palms-cartoon-icon_17232739.htm#fromView=keyword&page=1&position=10&uuid=a754b13f-4f90-496c-9326-ce3c85b88379&query=Hotel+3d":v
    },
    price : {
        type: Number,
        required: true,
        minLength:1
    },

    location : String,
    country : String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectID,
            ref:"review"
        }
    ],
    owner:{
        type: mongoose.Schema.Types.ObjectID,
        ref:"User"
    },
    image: {
        url: String,
        filename: String,
}

});
const listing= mongoose.model("listing",user);
module.exports= listing;