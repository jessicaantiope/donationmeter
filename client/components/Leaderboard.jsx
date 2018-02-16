
import React from 'react'
import {getDonors} from '../api'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topFive: []
    }
    this.getTopFive = this.getTopFive.bind(this)
  }

  getTopFive(arr){
    let newArr = []
    for (var i = 0; i < 5; i++) {
      newArr.push(arr[i])
    }
    this.setState(
      {topFive: newArr}
    )
    console.log(this.state.topFive)
  }

  componentDidMount() {
    getDonors((data, err) => {
      let arr = data.body
      arr.sort(function (a, b){
        return b.amount - a.amount
      })
      this.getTopFive(arr)
      console.log(arr)
    })
  }
   render(){
    return (
      <ul>
        {this.state.topFive.map(donor => {
          return (<li>{donor.name}: {donor.amount}</li>)
          })
        }
     </ul>
   )
 }
}

export default Leaderboard
