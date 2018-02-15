import React from 'react'
import donorApi from '../api.js'

class Leaderboard extends React.Component {
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
