// Import necessary modules
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const env = require('./config/environment');
const port = process.env.PORT|| 8000;
const app = express();
const db = require(env.db_path);
const flash = require('connect-flash');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const passport = require('passport');
const passportLocal = require(env.passport_path);
const customMware = require(env.customMware_path);

// Use middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Set up view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express-ejs-layouts middleware
app.use(expressLayout);

// Serve static files from the assets directory
app.use(express.static(env.assets_path));

// Set up session middleware
app.use(session({
    name: 'placementCell',
    secret: env.secret_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store:mongoStore.create({
        mongoUrl :env.mongoose_path,
        ttl: 14 * 24 * 60 * 60
    })
    }

));

// Initialize Passport authentication middleware
app.use(passport.initialize());
// Use Passport session middleware
app.use(passport.session());
// Use connect-flash middleware to display flash messages
app.use(flash());
// Set up custom middleware to set up "flash" object on response locals
app.use(customMware.setFlash);
// Use routes defined in index.js
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, function (error) {
    if (error) {
        console.log("Error in running Server");
    }
    console.log("Server is running");
});