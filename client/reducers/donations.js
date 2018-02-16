import {
  UPDATE_DONATIONS
} from '../actions'


const donations = (state=[], action) => {
    switch (action.type) {
    case UPDATE_DONATIONS:
      return action.donations

      default: 
      return state
  }
}


export default donations
