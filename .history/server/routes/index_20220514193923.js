const express = require('express');
const authRotuer = require('./auth');
const router = express.Router();

router.use('/auth', authRotuer);

module.exports = router;