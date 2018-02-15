
import React from 'react'
import getDonors from '../api'

class DonorTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Donorlist: []
    }
  }

  componentDidMount() {
    getDonors((err, data) => {
      console.log(err)
      console.log(data)
    })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api')
  //   .then(results => {
  //     console.log(results)
  //     return results.json()
  //   }).then(err, data => {
  //     let DonorList = data.results.map((donor) => {
  //       return(
  //         <li>{donor.name} + ': ' {donor.amount}</li>
  //       )
  //     })
  //     this.setState({DonorList: DonorList})
  //   })
  // }

  render() {
  return (
    <ul>
      {this.state.DonorList}
    </ul>
  )
 }
}

export default DonorTable
