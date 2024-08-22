import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import BasicSwitches from './BasicSwitches';
import ContinuousSlider from './ContinuousSlider';
import BasicSelect from './BasicSelect';


const Dashboard = (props) => {

  const { isConnected, masterVolume, soundQuality } = props;

  return (
    <div>
      <h1>Welcome user!</h1>
      <div className="dashboard-cards">
        <Card 

          variant="outlined"
          sx={{ minWidth: 275}}>
          <CardContent>
            <h2>Online Mode</h2>
            <p>Is this application connected to the internet?</p>
            {/*Add a mui switch/toggle */}
            <BasicSwitches/>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card 
          variant="outlined"
          boxShadow={2}
          sx={{minWidth: 275 }}>
          <CardContent>
            <h2>Master Volume</h2>
            <p>Overrides all other sound settings in this application.</p>
            {/*Add a mui slider */}
            <ContinuousSlider />
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>

        <Card 
          variant="outlined"
          boxShadow={2}
          sx={{minWidth: 275 }}>
          <CardContent>
            <h2>Sound Quality</h2>
            <p>Manually control the music quality in event of poor connection.</p>
            {/*Add a mui select */}
            <BasicSelect />
          </CardContent>
          <CardActions>
          </CardActions>
       </Card>
      </div>
    </div>
  )
}

export default Dashboard;
