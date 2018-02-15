import {
 DONATION_MADE
} from '../actions'

const yHeight = (oldHeight = 100, action) => {
 switch (action.type) {
   case DONATION_MADE:
     return 400 - oldHeight - action.amount

   default:
     return 400 - oldHeight
 }
}

export default yHeight
