import React from 'react'
import Form from './Form'
import Leaderboard from './Leaderboard'
import Total from './Total'
import Thermometer from './Thermometer'

import donorApi from '../api.js'

// getDonor(1, log)

// function log(data){
//   console.log(data)
// }



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    }
  }

  // componentDidMount(){
  //   donorApi.getDonors(function(err, data){
  //     console.log(data)
  //   })
  // }

  render() {
    return (
      <div className='app'>
        <p>hello</p>
      </div>
    )
  }
}

export default App
