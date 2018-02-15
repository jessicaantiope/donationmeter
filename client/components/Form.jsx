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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    let newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault()
    submitdetails = this.state
    this.props.submitCallback(submitdetails)
  }

  render() {
    return (
      <div>
        <h5>Please input your donation details:</h5>
        <form>
          Name: <br/>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br/>
          Donation: <br/>
          <input type='number' name='donation' value={this.state.donation} onChange={this.handleChange} /><br/>
          <input type='submit' onClick={this.handleSubmit} value='Submit' />
        </form>
      </div>
    )
  }
}

export default Form