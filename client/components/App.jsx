import React from 'react'

import Form from './Form'
import Leaderboard from './Leaderboard'
import Total from './Total'
import Thermometer from './Thermometer'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import DonorTable from './DonorTable'

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


  render() {
    return (
      <Router>
      <div className='app'>
        <p>hello</p>
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

export default App
