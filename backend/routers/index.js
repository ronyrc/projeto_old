//routers/index.js
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('Curso de react'));

module.exports = router