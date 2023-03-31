const express = require('express');
const router = express.Router();
const employeedashboard = require('../controller/student');

// Route to display dashboard
router.get('/dashboard', employeedashboard.dashboard)

// Route to display add student page
router.get('/student', employeedashboard.addStudentPage);

// Route to add a new student
router.post('/addstudent', employeedashboard.addStudent);

// Route to download data
router.get('/download' , employeedashboard.downloadData);


module.exports = router;