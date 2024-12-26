const router = require('express').Router();
const { createJob } = require('../Controllers/JobController');
const {Authentication} = require('../Middleware/AuthMiddleware');

router.post('/createjob' , Authentication , createJob)
router.get('/createjob' , Authentication , createJob)

module.exports = router