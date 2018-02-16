import React from 'react'

import Form from './Form'
import Leaderboard from './Leaderboard'
import Total from './Total'
import Thermometer from './Thermometer'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import DonorTable from './DonorTable'
import {makeDonation} from '../api'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      showDonors: false
    }
    this.displayForm = this.displayForm.bind(this)
    this.handleDonation = this.handleDonation.bind(this)
    this.displayDonors = this.displayDonors.bind(this)

  }

  displayForm(event) {
    this.setState({ showForm: true })
  }

  displayDonors(event) {
    this.setState({ showDonors: true })
  }

  handleDonation(donationDetails) {
    let {amount, name} = donationDetails
    this.props.dispatch(makeDonation(amount, name))
  }


  render() {
    return (
      <Router>
        <div>
          <div className='app'>
            <h1 className='title is-1'>hello</h1>
            <button onClick={this.displayForm}>Donate</button>
            {this.state.showForm && <Form />}
            <Thermometer />
            <Leaderboard />
            <button onClick={this.displayDonors}>See Donors</button>
            {this.state.showDonors && <DonorTable />}
          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(App)
