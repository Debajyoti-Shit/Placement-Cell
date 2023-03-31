const passport = require('passport');
const passportLocals = require('passport-local').Strategy;
const Employee = require('../models/employee');

// Define a passport callback function to handle user authentication.
let passportcallback = async function (req, email, password, done) {
    try {
        const employeePresent = await Employee.findOne({ email: email });
        // If the email and password are not valid, return an error message.
        if (!employeePresent || employeePresent.password != password ) {
            req.flash('error', 'Please Enter Valid Email & Password !');
            return done(null, false);
        }
        // Otherwise, return the user's details to passport.    
        return done(null, employeePresent);
        

    } catch (error) {
        return done(error);
    }
}

// Register the passport-local strategy with passport.
passport.use(new passportLocals({ usernameField: 'email', passReqToCallback: true }, passportcallback));

// Serialize the user object to a session ID.
passport.serializeUser(function (employee, done) {
    return done(null, employee.email);
});

// Deserialize the user object from a session ID.
const deserializeUserCallback = async function (email, done) {
    try {
        const employeeLogin = await Employee.findOne({ email: email });
        return done(null, employeeLogin);
    } catch (error) {
        return done(error);
    }
}

passport.deserializeUser(deserializeUserCallback);

// Define a middleware function to check whether a user is authenticated.
passport.checkAuthentication = function (req, res, next) {
    if (req.isAuthenticated()) {
        // req.user contains user details
        // If the user is authenticated, call the next middleware function.
        return next();
    }
        // If the user is not authenticated, redirect to the login page.
    return res.redirect('/');
}
// Export the passport object.
module.exports = passport;