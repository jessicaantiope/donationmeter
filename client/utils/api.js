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

function receiveTotal (total) {
  console.log({total});
  return {
    type: 'RECEIVE_CURRENT_TOTAL',
    total
  }
}


export function getTotal(){
  return dispatch => {
    console.log("getTotal");
    getDonors((data, err) => {
      dispatch(receiveTotal(data.body.reduce((total, donor) => total + Number(donor.amount), 0)))
    })
  }
}

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
  makeDonation: makeDonation,
  getTotal
}
