import React from 'react'

import Form from './Form'
import Leaderboard from './Leaderboard'
import Total from './Total'
import Thermometer from './Thermometer'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    }
  }
  render() {
    return (
      <div className='app'>
        <p>hello</p>
        <Thermometer />
      </div>
    )
  }
}

export default App
