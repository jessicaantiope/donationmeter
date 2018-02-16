import request from 'superagent'

export const DONATION_MADE = 'DONATION_MADE'
export const RECEIVE_TOTAL = 'RECEIVE_TOTAL'

export const donationMade = (donationDetails) => {
  console.log('donation details', donationDetails)
  return {
    type: DONATION_MADE,
    amount: donationDetails.amount
  }
}

function getTotal (total) {
  return {
    type: RECEIVE_TOTAL,
    total: total
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

export function receiveTotal (total) {
  return (dispatch) => {
    dispatch(getTotal(total))
  }
}
