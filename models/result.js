const mongoose = require('mongoose');

// Defining schema for Result model
const result = new mongoose.Schema({
    result :{
        type : String,
        enum : ['PASS' , 'FAIL' , 'On Hold' , 'Didnot Attemp'],
        default : 'On Hold'
    },
    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student'
    },
    interviewId :{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Interview'
    }
},{timestamps : true});

// Creating Result model from result schema
const Result = mongoose.model('Result' , result);

// Exporting Result model
module.exports = Result;