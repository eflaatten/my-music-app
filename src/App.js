import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ButtonAppBar from './components/ButtonAppBar';
import SystemNotifications from './components/SystemNotifications'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isConnected, setIsConnected] = useState(true)
  const [masterVolume, setMasterVolume] = useState(20)
  const [soundQuality, setSoundQuality] = useState("")
  const [notification, setNotification] = useState("")


  // handler functions
  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  const handleToggleSwitch = () => {
    setIsConnected(prevState => !prevState)
  }

  const handleVolumeChange = (e, newValue) => {
    setMasterVolume(newValue)
  }

  const handleQualityChange = (e) => {
    setSoundQuality(e.target.value)
  }

  const handleNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification("")
    }, 4000)
  }

  useEffect(() => {
    console.log("current login state: ", loggedIn)
  }, [loggedIn])

  return (
    <div className="App">
      <ButtonAppBar isLoggedIn={loggedIn} handleLogout={handleLogout}/>
      {loggedIn ?
        <>
        <Dashboard 
          handleToggleSwitch={handleToggleSwitch}
          handleVolumeChange={handleVolumeChange}
          handleQualityChange={handleQualityChange}
          masterVolume={masterVolume}
          soundQuality={soundQuality}
          isConnected={isConnected}
          handleNotification={handleNotification}
          notification={notification}
        />
        <SystemNotifications notification={notification} /> 
      </> : (
        <Login handleLogin={handleLogin} />
      )}
    </div> 
  )};

export default App;


