const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDonor: getDonor,
  getDonors: getDonors
}

function getDonors (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getDonor (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id)
}
