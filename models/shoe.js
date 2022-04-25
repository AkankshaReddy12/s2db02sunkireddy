const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    shoe_name: String, 
    shoe_color: {type:String, 
        minLength:1,
        maxLength:15},
    shoe_size: {type:Number,
    min: 4,
    max:17 }
}) 
 
module.exports = mongoose.model("shoe", 
costumeSchema)