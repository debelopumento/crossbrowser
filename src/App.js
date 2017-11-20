import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  clickedButton = () => {
    console.log('button clicked')
  }
  componentDidMount() {
    this.props.fetchUsers()
  }
  render() {
    let user
    if (this.props.users) {
      user = this.props.users[0].name
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.clickedButton}>button</button>
        <div
          style={{
            border: '1px solid gray',
            height: 30,
            cursor: 'pointer',
          }}
          onClick={this.clickedButton}
        >
          clickable div
        </div>
        <div>
          counter: {this.props.counter}
          <button onClick={this.props.incrementCounter}>
            increment counter
          </button>
        </div>
        <div>first user: {user}</div>
      </div>
    )
  }
}

export default connect(
  storeState => ({
    counter: storeState.counter,
    users: storeState.users,
  }),
  {
    incrementCounter: actions.incrementCounter,
    fetchUsers: actions.fetchUsers,
  }
)(App)
