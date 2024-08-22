import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function BasicSwitches({checked, onChange}) {
  return (
    <div>
      <Switch
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': 'Switch demo' }}
      />
    </div>
  );
}
