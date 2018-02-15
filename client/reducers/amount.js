import {
 DONATION_MADE
} from '../actions'

const amount = (totalAmount = 100, action) => {
 switch (action.type) {
   case DONATION_MADE:
     return totalAmount + action.amount

   default:
     return totalAmount
 }
}

export default amount
