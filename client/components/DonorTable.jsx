
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
    getDonors((data, err) => {
      console.log(data.body)
      console.log('herllo')
      this.setState(
       {Donorlist: data.body}
       )
      console.log(this.state.Donorlist)
    })
  }

  render() {
  return (
    <ul>
      {this.state.Donorlist.map(donor => {
        return (<li>{donor.name}: {donor.amount}$</li>)
      })
    }
    </ul>
  )
 }
}

export default DonorTable
