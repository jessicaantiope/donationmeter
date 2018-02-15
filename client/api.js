import request from 'superagent'

function getDonors (callback) {
  request
    .get('/api')
    .end((err, res) => {
      if(err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function addDonation(amount, name, callback) {
  request
  .post('/api')
  .send(amount, name)
  .end((err, res) => {
    callback(res)
  })
}

// function getDonor (id, callback, testConn) {
//    request
//    .get('/api')
//    .end((res) => {
//      callback('donors').where('id', id)
//    })
// }

module.exports = {
  getDonors: getDonors,
  getDonor:getDonor,
  addDonation: addDonation
}
