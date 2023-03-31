const mongoose = require('mongoose');

// Creating a new Schema for Employee with firstname, lastname, email, password and timestamps properties
const employee = new mongoose.Schema({
    firstname:{
        type : String,
        required : true
    },
    lastname:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique:true
    },
    password : {
        type : String,
        required : true
    }
},{timestamps : true});

// Creating a new model using the employee schema and exporting it
const Employee = mongoose.model('Employee' ,employee);

module.exports = Employee;