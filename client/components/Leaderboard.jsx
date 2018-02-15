var getDonor = require('../../db.js').getDonor

getDonor(1).then((data) => {
  console.log(data)
})
