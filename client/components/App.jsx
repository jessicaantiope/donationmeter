import React from 'react'
import Form from './Form'
import Leaderboard from './Leaderboard'
import Total from './Total'
import Thermometer from './Thermometer'




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
      <div className='app'>
        <p>hello</p>

        <button onClick={this.displayForm}>Button</button>

        {this.state.showForm && <Form />}
      </div>
    )
  }
}

export default App