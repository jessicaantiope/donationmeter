import request from 'superagent'

export const DONATION_MADE = 'DONATION_MADE'

export const donationMade = (donationDetails) => {
  console.log('donation details', donationDetails)
  return {
    type: DONATION_MADE,
    amount: donationDetails.amount
  }
}

export function makeDonation(donationDetails) {
  return (dispatch) => {
    console.log(donationDetails)
    return request
      .post('/api')
      .send(donationDetails)
      .then(res => {
        dispatch(donationMade(donationDetails))
      .catch(err => {
        dispatch(err.message)
      })
      })
  }
}

//Uncaught TypeError for line 20 re: dispatch - not breaking, but showing error
