const mongoose = require('mongoose');

// Defining interview schema
const interview = new mongoose.Schema({
    companyName :{
        type : String,
        required : true
    },
    date :{
        type : Date,
        default : Date.now()
    },
    students :[{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Student'
    }],
    result:[{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Result'
    }]
},{timestamps : true});

// Creating Interview model from schema
const Interview = mongoose.model('Interview' , interview);
// Exporting Interview model
module.exports = Interview;