const mongoose = require('mongoose')
const Schema = mongoose.Schema

const city = new Schema({
    name:{type:String, required:true},
    temperature:{type:Number, required:true},
    condition:{type:String, required:true},
    conditionPic:{type:String, required:true}
})

const City = mongoose.model('city', city) 

module.exports = City
