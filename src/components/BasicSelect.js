import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({value, onChange}) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Audio
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Audio"
          value={value}
          onChange={onChange}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
