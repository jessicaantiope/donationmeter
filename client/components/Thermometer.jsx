import React from 'react'
import {connect} from 'react-redux'

import {makeDonation} from '../actions/index.js'

const Thermometer = (props) => (
  <div>
    <svg width={300} height={1000}>
      
      <line id="thermLine" x1="150" y1="1000" x2="150" y2={1000 - props.amount} stroke="rgb(255,0,0)" strokeWidth="300" />

      <line id="thermShape" x1="300" x2="200" y1="500" y2="500" stroke="black" strokeWidth="10" />
    </svg>
  </div>
)

const mapStateToProps = (state) => {
  console.log('state test', typeof state.donations, state.amount)
  return {
    amount: state.amount,
    donations: state.donations
  }
}

export default connect(mapStateToProps)(Thermometer)
