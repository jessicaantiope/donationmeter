import request from 'superagent'


function getDonors (callback) {
  request
    .get('/api')
    .then((err, data) => {
      if(err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}


function getTotal (total) {
  return {
    type: 'RECEIVE_TOTAL',
    total
  }
}

function getTotal(callback){
  return dispatch => {
    getDonors((data, err) => {
      dispatch(getTotal(data.body.reduce((total, donor) => total + Number(donor.amount), 0)))
    })
  }
}
// getTotal()

console.log('total3', total)

function makeDonation(amount, name, callback) {
  request
  .post('/api')
  .send(amount, name)
  .end((err, res) => {
    callback(res)
  })
}

module.exports = {
  getDonors: getDonors,
  makeDonation: makeDonation,
  getTotal: getTotal
}
