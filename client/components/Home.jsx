import React from 'react'
import Form from './Form'
import Leaderboard from './Leaderboard'
import Total from './Total'
import Thermometer from './Thermometer'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import DonorTable from './DonorTable'
import {makeDonation, getTotal} from '../api'
import { connect } from 'react-redux'


class Home extends React.Component {
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
  componentDidMount() {
    this.props.dispatch(getTotal())
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
        <div>
          <div className='app'>
            <button onClick={this.displayForm}>Donate</button>
            {this.state.showForm && <Form />}
            <Thermometer />
            <Leaderboard />
            <button onClick={this.displayDonors}>See Donors</button>
            {this.state.showDonors && <DonorTable />}
          </div>
        </div>
    )
  }
}

export default connect()(Home)