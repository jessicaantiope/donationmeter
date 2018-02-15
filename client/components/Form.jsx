import React from 'react'
//import {addDonation} from '../api'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      donation: 0
    }

  this.handleChange = this.handleChange.bind(this)

  }

  addNewDonation(event) {
    event.preventDefault()
    //addDonation(this.state.name, this.state.donation, callback to show new donation)
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }
 render() {
   return (
    <div>
      <p> hello form </p>
      <form>
      Name:
      <input type='text' value={this.state.name} onChange={this.handleChange}/><br/>
      Donation:
      <input type='text' value={this.state.donation} onChange={this.handleChange}/> 
      
      </form>
    </div>
   )
 }


}

export default Form