import React, { useState } from 'react';
import { Card, CardContent, CardActions } from '@mui/material';
import BasicSwitches from './BasicSwitches';
import ContinuousSlider from './ContinuousSlider';
import BasicSelect from './BasicSelect';
import SystemNotifications from './SystemNotifications';


const Dashboard = ({
  isConnected,
  masterVolume,
  soundQuality,
  handleVolumeChange,
  handleToggleSwitch,
  handleQualityChange,
  handleNotification,
  notification
  }) => {


  return (
    <div>
      <h1>Welcome user!</h1>
      <div className="dashboard-cards">
        <Card 
          id="online-card"
          variant="outlined"
          sx={{ minWidth: 275}}>
          <CardContent>
            <h2>Online Mode</h2>
            <p>Is this application connected to the internet?</p>
            <BasicSwitches 
              checked={isConnected} 
              onChange={(event) => {
                handleToggleSwitch()
                handleNotification(isConnected ? "You are now offline!" : "You are now online!")
              }} 
            />
        </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card 
          id="master-volume-card"
          variant="outlined"
          sx={{minWidth: 275 }}>
          <CardContent>
            <h2>Master Volume</h2>
            <p>Overrides all other sound settings in this application.</p>
            <ContinuousSlider 
              value={masterVolume} 
              onChange={(event, newValue) => {
                handleVolumeChange(event, newValue)
                handleNotification(newValue > 85 ? "Listening to music at a high volume could cause long-term hearing loss." : `Volume changed to ${newValue}`)
              }} 
            />
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card 
          id="sound-quality-card"
          variant="outlined"
          sx={{minWidth: 275 }}>
          <CardContent>
            <h2>Sound Quality</h2>
            <p>Manually control the music quality in event of poor connection.</p>
            <BasicSelect
              value={soundQuality}
              onChange={(event) => {
                handleQualityChange(event)
                handleNotification(`Quality changed to ${event.target.value}`)
              }}
            />
          </CardContent>
          <CardActions>
          </CardActions>
       </Card>

      </div>
    </div>
  )
}

export default Dashboard;
