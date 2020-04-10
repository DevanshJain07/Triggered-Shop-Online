const mongoose = require('mongoose');
const {ObjectId}= mongoose.Schema;
  const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        maxlength:2000,
        trim:true,
    },
    price:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    category:{
        type: ObjectId,
        ref: "Category",
        required: true
    },
    stock:{
        type:Number
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        default:0
    }
},{timestamps:true }
);
module.exports=mongoose.model("Product",productSchema);

