const express = require('express');
const router = express.Router();
const resultPage = require('../controller/result');

// Route for displaying result page for a specific interview result
router.get('/:id' , resultPage.resultPage);

// Route for updating a specific interview result
router.post('/update', resultPage.update)

module.exports = router;