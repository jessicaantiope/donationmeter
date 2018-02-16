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
      showForm: false
    }
    this.displayForm = this.displayForm.bind(this)
    this.handleDonation = this.handleDonation.bind(this)
  }

  displayForm(event) {
    this.setState({ showForm: true })
  }

  handleDonation(donationDetails) {
    let {amount, name} = donationDetails
    this.props.dispatch(makeDonation(amount, name))
  }


  render() {
    return (
      <Router>
      <div className='app'>
        <p>hello</p>
        <button onClick={this.displayForm}>Button</button>
        {this.state.showForm && <Form handleDonation={this.handleDonation} />}
        <Thermometer />
        <div>
          <Route path="/DonorTable" component={DonorTable} />
          <a href='/#/DonorTable'>DonorTable</a>
        </div>
      </div>
    </Router>
    )
  }
}

export default connect()(App)
