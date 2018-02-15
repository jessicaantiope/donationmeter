import React from 'react'
import {connect} from 'react-redux'

const Thermometer = () => (
  <div>
    <svg width={300} height={400}>
      <line id="thermLine" x1="150" y1="400" x2="150" y2="{yHeight}" stroke="rgb(255,0,0)" strokeWidth="300" />
    </svg>
  </div>
)

const mapStateToProps = (state) => {
  return {
    yHeight: state.yHeight
  }
}

export default connect(mapStateToProps)(Thermometer)
