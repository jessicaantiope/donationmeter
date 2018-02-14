const express = require('express')
const bodyParser = require('body-parser')

const routes = require('../routes/routes')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/', routes)


module.exports = app