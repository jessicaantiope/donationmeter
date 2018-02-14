const express = require('express')
const app = express()
var server = require('../server/server')
const db = require('../db')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('I\'m listening')
})

module.exports = router