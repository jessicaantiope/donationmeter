import request from 'superagent'

export const DONATION_MADE = 'DONATION_MADE'

export const donationMade = (amount) => {
  return {
    type: DONATION_MADE,
    amount: amount
    // yHeight: yHeight
  }
}

export function makeDonation (amount) {
  return (dispatch) => {
    dispatch(donationMade(amount))
  }
}

// export function fetchPosts (subreddit) {
//   return (dispatch) => {
//     dispatch(requestPosts())
//     return request
//       .get(`/api/v1/reddit/subreddit/${subreddit}`)
//       .then(res => {
//         dispatch(receivePosts(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }
