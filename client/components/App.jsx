import React from 'react'

import Form from './Form'
import Leaderboard from './Leaderboard'
import Total from './Total'
import Thermometer from './Thermometer'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import DonorTable from './DonorTable'
import {getDonors} from '../api.js'
import {updateDonations} from '../actions/index'
import {connect} from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    }
    this.displayForm = this.displayForm.bind(this)
  }

  displayForm(event) {
    this.setState({ showForm: true })
  }

  componentDidMount() {
    this.props.dispatch(updateDonations())
  }


  render() {
    return (
      <Router>
      <div className='app'>
      {console.log('props', this.props.donations)}
        <p>{this.props.donations}</p>
        <button onClick={this.displayForm}>Button</button>
        {this.state.showForm && <Form />}
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
