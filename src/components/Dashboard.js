import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import BasicSwitches from './BasicSwitches';
import ContinuousSlider from './ContinuousSlider';
import BasicSelect from './BasicSelect';


const Dashboard = (props) => {

  const { isConnected, masterVolume, soundQuality, handleVolumeChange, handleToggleSwitch, handleQualityChange } = props;

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
            <BasicSwitches checked={isConnected} onChange={handleToggleSwitch}/>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card 
          id="master-volume-card"
          variant="outlined"
          boxShadow={2}
          sx={{minWidth: 275 }}>
          <CardContent>
            <h2>Master Volume</h2>
            <p>Overrides all other sound settings in this application.</p>
            <ContinuousSlider value={masterVolume} onChange={handleVolumeChange}/>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card 
          id="sound-quality-card"
          variant="outlined"
          boxShadow={2}
          sx={{minWidth: 275 }}>
          <CardContent>
            <h2>Sound Quality</h2>
            <p>Manually control the music quality in event of poor connection.</p>
            <BasicSelect onChange={handleQualityChange}/>
          </CardContent>
          <CardActions>
          </CardActions>
       </Card>
      </div>
    </div>
  )
}

export default Dashboard;
