import request from '../utils/api'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'


function loginSuccess(creds) {
  const action = {
    type: LOGIN_SUCCESS,
    isAuthenticated: true
  }
}

export function loginUser(creds) {
  console.log('hey')
  return dispatch => {
    return request ('post', '/signin')
  //   if (---) {
  //     dispatch (loginSuccess())
  //   } else {
  //     error
  //   }
  }
}
