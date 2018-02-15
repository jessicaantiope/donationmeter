
import React from 'react'
import getDonors from '../api'

class DonorTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Donorlist: []
    }
    this.mapData = this.mapData.bind(this)
  }

 mapData(data) {
   console.log(data)
 }
 componentDidMount(){
  getDonors(() => mapData(data))
 }
  // componentDidMount() {
  //   fetch('http://localhost:3000/apkubfki')
  //   .then(results => {
  //     console.log(results)
  //     return results.json()
  //   }).then(data => {
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
