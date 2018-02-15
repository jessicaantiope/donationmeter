import React from 'react'
import {connect} from 'react-redux'

import {makeDonation} from '../actions/index.js'

// var thermLine = document.getElementById('thermLine')
// thermLine.y2.baseVal.value = 500

const Thermometer = (props) => (
  <div>
    {console.log('test', props.amount)}
  <input type="number" onChange={(e) => props.dispatch(makeDonation(Number(e.target.value)))} />
    <p>New Amount: {props.amount}</p>

    <svg width={300} height={1000}>
      <line id="thermLine" x1="150" y1="1000" x2="150" y2={1000 - props.amount} stroke="rgb(255,0,0)" strokeWidth="300" />
      <line id="thermShape" x1="300" x2="200" y1="500" y2="500" stroke="black" strokeWidth="10" />
    </svg>
  </div>
)

const mapStateToProps = (state) => {
  console.log(state.amount)
  return {
    amount: state.amount
  }
}

export default connect(mapStateToProps)(Thermometer)
