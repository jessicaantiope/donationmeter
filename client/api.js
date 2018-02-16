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

// function getDonor (id, callback, testConn) {
//    request
//    .get('/api')
//    .end((res) => {
//      callback('donors').where('id', id)
//    })
// }


function getData(){
    getDonors(function(err, data){
      console.log(data)
  })
}

function makeDonation(amount, name) {
  console.log('test')
  return (dispatch) => {
    request
    .post('/api')
    .send(amount, name)
    .end((err, res) => {
      console.log(err.body)
    })
  }
}

module.exports = {
  getDonors: getDonors,
  makeDonation: makeDonation
}
