const mongoose = require('mongoose');

// Define the schema for a student
const student = new mongoose.Schema({
    batch :{
        type : String,
        required : true
    },
    name : {
        type:String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    college:{
        type:String,
        required: true
    },
    status:{
        type:String,
        enum: ['Placed' , 'Not_placed'],
        default: 'Not_placed'
    },
    DSA_FinalScore :{
        type:Number,
        default:0
    },
    WebD_FinalScore :{
        type : Number,
        default:0
    },
    React_FinalScore :{
        type : Number,
        default:0
    },
    interviews : [{
        type : mongoose.Types.ObjectId,
        ref:'Interview'
    }],
    
},{timestamps :true});

// Creating student model from student schema
const Student = mongoose.model('Student' , student);

module.exports = Student;