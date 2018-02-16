const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDonor: getDonor,
  getDonors: getDonors,
  makeDonation: makeDonation
}

function getDonors (testConn) {
  const conn = testConn || connection
  return conn('donors').select()
}

function getDonor (id, testConn) {
  const conn = testConn || connection
  return conn('donors').where('id', id)
}

function makeDonation (newDonation, testConn){
  const conn = testConn || connection
  // return knex('donors').insert({name: newDonation.name}, {amount: newDonation.amount}).returning('*').toString()
  
  return conn('donors').insert([{name: newDonation.name}, {amount: newDonation.amount}])
}