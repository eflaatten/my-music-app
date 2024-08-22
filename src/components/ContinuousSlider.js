import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function ContinuousSlider({ value, onChange }) {

  return (
    <Box sx={{ width: 360 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider 
          aria-label="Volume"
          value={value}
          onChange={onChange}
        />
        <VolumeUp />
      </Stack>
    </Box>
  );
}
