const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getDonors (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getDonors (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id)
}
