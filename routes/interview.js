const express = require('express');
const router = express.Router();
const interviewPage = require('../controller/interview');

// Route to display list of interviews
router.get('/interview_list' ,interviewPage.interviewPage);

// Route to display form to allocate interview to student
router.get('/:id' , interviewPage.interviewForm);

// Route to handle interview allocation
router.post('/interview_allocation' , interviewPage.interviewAllocation);

module.exports = router;