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

router.post('/', (req, res) => {
  const newDonation = req.body
  db.makeDonation(newDonation)
  .then((donationId) => {
    res.json({donationIds: {id: donationIds[0]}})
  } 
})

module.exports = router
