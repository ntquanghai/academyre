const express = require('express');

const authRouter = require('./auth');
const testRouter = require('./test')
const courseRouter = require('./courses');
const authMdw = require('../middlewares/auth')
const router = express.Router();
//Routing
router.use('/auth', authRouter);
router.use('/courses', courseRouter)
router.use('/test', authMdw, testRouter)
// router.use('/lesson'authMd)
module.exports = router;