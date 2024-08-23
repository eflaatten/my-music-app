import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar(props) {
  
  const { isLoggedIn, handleLogin } = props;


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            display="flex"
            justifyContent="flex-start"
            fontSize="26px"
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
          {/* Display logout button only if isLoggedin is true*/}
          {isLoggedIn && <Button color="inherit" onClick={handleLogin}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
