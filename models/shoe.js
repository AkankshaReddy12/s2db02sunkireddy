const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    shoe_name: String, 
    shoe_color: String, 
    shoe_size: {type:Number,
    min: 4,
    max:17 }
}) 
 
module.exports = mongoose.model("shoe", 
costumeSchema)