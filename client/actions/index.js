import request from 'superagent'

export const DONATION_MADE = 'DONATION_MADE'
export const UPDATE_DONATIONS = 'UPDATE_DONATIONS'


export const donationMade = (amount) => {
  return {
    type: DONATION_MADE,
    amount: amount
  }
}

export const getAllDonations = (donations) => {
  console.log('test donations', donations)
  return {
    type: UPDATE_DONATIONS,
    donations: donations
  }
}

export function makeDonation (amount) {
  return (dispatch) => {
    dispatch(donationMade(amount))
  }
}

export function updateDonations() {
  console.log('updateDonations function')
  return (dispatch) => {
    return request
    .get('/api')
    .then(function(res) {
      dispatch(getAllDonations(res.body))
      console.log('resbody', res.body)
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}
