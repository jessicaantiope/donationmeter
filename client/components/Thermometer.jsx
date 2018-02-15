import React from 'react'
import {connect} from 'react-redux'
import {makeDonation} from '../actions/index.js'

// var thermLine = document.getElementById('thermLine')
// thermLine.y2.baseVal.value = 500

const Thermometer = (props) => (
  <div>
  <input type="text"></input>
  <button>Click</button>
    <p>New Amount: {props.yHeight}</p>
    <svg width={300} height={400}>
      <line id="thermLine" x1="150" y1="400" x2="150" y2={props.yHeight} stroke="rgb(255,0,0)" strokeWidth="300" />
    </svg>
  </div>
)

const mapStateToProps = (state) => {
  return {
    yHeight: state.yHeight
  }
}

export default connect(mapStateToProps)(Thermometer)
