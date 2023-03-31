const express = require('express');
const router = express.Router();
const passport = require('passport');
const employee = require('../controller/employee');

// Route to sign in page
router.get('/', employee.SignInPage);

// Route to authenticate employee credentials
router.post('/sign_in', passport.authenticate('local', { failureRedirect: '/' }), employee.SignIn);

// Route to create session page
router.get('/signUp', employee.createSessionPage);

// Route to destroy employee session
router.get('/destroy_session' , employee.SignOut);

// Route to create employee session
router.post('/create_session', employee.createSession);

// Route to employeedashboard
router.use('/employee', require('./employeedashboard'));

// Route to interview management
router.use('/student', require('./interview'));

// Route to result management
router.use('/result', require('./result'));

// Route to job management
router.use('/job', require('./job'));


module.exports = router; 