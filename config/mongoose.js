const mongoose = require('mongoose');

// Define an async function to establish a connection to a MongoDB database cluster.
async function main(){
    await mongoose.connect('mongodb+srv://debajyotishit3:Deba16@cluster0.fxnuinl.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}

// Call the main() function and catch any errors that occur during the connection attempt.
main().catch(error =>console.log("connection not successfull !!"));