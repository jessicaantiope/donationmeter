var getDonors = require('../../db.js').getDonors

var Donors = getDonors().then((data) => {
  log(data)
})

console.log(Donors)

function log(data){
  console.log(data)
}
