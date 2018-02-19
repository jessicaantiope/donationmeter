import React from 'react'
import {loginUser} from '../actions/login'


class LoginForm extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      username: 'asd',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }
  
  handleChange(e) {
    let currentState = this.state
    currentState[e.target.name] = e.target.value
    this.setState(currentState)
    console.log('username', this.state.username)
}

  handleClick() {
    const {username, password} = this.state
    console.log('on submit', username)
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    
    loginUser(creds)
  }


render() {
  return (
    <div>
      <label>
        Username:
        <input type ='text' name='username' onChange={this.handleChange} />
      </label>
      <label>
        Password:
        <input type ='text' name='password' onChange={this.handleChange} />
      </label>
      <button type='submit' onClick={this.handleClick} >Submit</button>
    </div>
    )
  }
}


export default LoginForm
