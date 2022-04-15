const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    shoe_name: String, 
    shoe_color: String, 
    shoe_size: Number 
}) 
 
module.exports = mongoose.model("shoe", 
costumeSchema)