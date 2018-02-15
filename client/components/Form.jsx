import React from 'react'
//import {addDonation} from '../api'
import {makeDonation} from '../actions/index'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      donation: 0
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDonationChange = this.handleDonationChange.bind(this)

  }

  addNewDonation(event) {
    event.preventDefault()
    //addDonation(this.state.name, this.state.donation, callback to show new donation)
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleDonationChange(event) {
    this.setState({
      donation: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p> hello form </p>
        <form>
          Name:
      <input type='text' value={this.state.name} onChange={this.handleNameChange} /><br />
          Donation:
      <input type='number' value={this.state.donation} onChange={this.handleDonationChange} />
      <input type='submit' onClick={() => makeDonation('hello')} value='Submit' />

        </form>
      </div>
    )
  }


}

export default Form