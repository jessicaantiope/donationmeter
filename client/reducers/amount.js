import {
 DONATION_MADE
} from '../actions'

const amount = (oldTotal = 100, action) => {
 switch (action.type) {
   case DONATION_MADE:
     return oldTotal + action.amount

   default:
     return oldTotal
 }
}

export default amount
