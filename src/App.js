import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ButtonAppBar from './components/ButtonAppBar';

class App extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleToggleSwitch = this.handleToggleSwitch.bind(this)
    this.handleVolumeChange = this.handleVolumeChange.bind(this)
    this.handleQualityChange = this.handleQualityChange.bind(this)

    this.state = {
      loggedIn: false,
      isConnected: true,
      masterVolume: 20,
      soundQuality: ""
    }
  }

  handleLogin = () => {
    this.setState({loggedIn: true})
  }

  handleToggleSwitch = () => {
    this.setState({isConnected: !this.state.isConnected})
  }

  handleVolumeChange = (e, newValue) => {
    this.setState({masterVolume: newValue})
  }

  handleQualityChange = (e) => {
    this.setState({soundQuality: e.target.value})
  }
  
  render(){
    console.log("current login state: ", this.state.loggedIn)
    return (
      <div className="App">
        <ButtonAppBar />
        {this.state.loggedIn ?
          <Dashboard 
            handleToggleSwitch={this.handleToggleSwitch}
            handleVolumeChange={this.handleVolumeChange}
            handleQualityChange={this.handleQualityChange}
            masterVolume={this.state.masterVolume}
            soundQuality={this.state.soundQuality}
            isConnected={this.state.isConnected}/> :
          <Login handleLogin={this.handleLogin} />
        }
      </div> 
    )}
}

export default App;
