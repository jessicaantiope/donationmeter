import React from 'react'

let rectHeight = 400 - 100

const Thermometer = () => (
  <div>
      <svg width={300} height={400}>
          <line x1="150" y1="400" x2="150" y2="200" stroke="rgb(255,0,0)" strokeWidth="300" />
      </svg>
  </div>
)

export default Thermometer
