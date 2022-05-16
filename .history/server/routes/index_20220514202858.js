const express = require('express');

const authRouter = require('./auth');
const testRouter = require('./test')
const authMdw = require('../middlewares/auth')
const router = express.Router();

router.use('/auth', authRouter);
router.use('/test', authMdw, testRouter)
module.exports = router;