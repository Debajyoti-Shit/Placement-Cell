const express = require('express');
const router = express.Router();

// import jobList controller
const jobList = require('../controller/jobs');

// handle GET request to '/job/list'
router.get('/list' , jobList.jobPage);

// export router
module.exports = router;