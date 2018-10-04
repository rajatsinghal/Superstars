const express = require('express');
const router = express.Router();

router.use(express.json());
router.use('/api/users', require('./users'));
router.get('/', (req, res) => res.send("Welcome to Superstars api!!"));

module.exports = router;