const express = require('express')
const app = express()
var server = require('../server/server')
const db = require('../db')
const router = express.Router()


router.get('/', (req, res) => {
  db.getDonors().then((data) => {
      res.json(data)
  })
})

router.get('/:id', (req, res) => {
  db.getDonor(req.params.id).then((data) => {
    res.json(data)
  })
})


module.exports = router
