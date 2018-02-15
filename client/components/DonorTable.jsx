
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
      this.setState((data) =>{
        return {Donorlist: data.body}
      })
      console.log(this.state.Donorlist)
    })
  }

  render() {
  return (
    <p>
      {this.state.Donorlist}
    </p>
  )
 }
}

export default DonorTable
