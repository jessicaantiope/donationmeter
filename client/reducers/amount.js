import {
 DONATION_MADE
} from '../actions'

const amount = (totalAmount = 0, action) => {
 switch (action.type) {
   case DONATION_MADE:
     return totalAmount + Number(action.amount)

     case 'RECEIVE_CURRENT_TOTAL':
     console.log({action});
      return action.total

   default:
     return totalAmount

 }
}

export default amount
