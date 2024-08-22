import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ButtonAppBar from './components/ButtonAppBar';

class App extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)

    this.state = {
      loggedIn: false,
      isConnected: true,
      masterVolume: 50,
      soundQuality: "Normal"
    }
  }

  handleLogin = () => {
    this.setState({loggedIn: true})
  }

  handleToggleSwitch = () => {
    this.setState({isConnected: !this.state.isConnected})
  }
  
  render(){
    console.log("current login state: ", this.state.loggedIn)
    return (
      <div className="App">
        <ButtonAppBar />
        {this.state.loggedIn ?  <Dashboard /> :
          <Login handleLogin={this.handleLogin} />
        }
      </div> 
    )}
}

export default App;
