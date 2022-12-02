import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectTime = () => {
  const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1 }} style={{ width: '90%' }}>
      <Select
        value={time}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        style={{ textAlign: 'left', color: 'grey' }}
      >
        <MenuItem value="" disabled style={{ cursor: 'none' }}>
          Select Time
        </MenuItem>
        <MenuItem value={10}>09:00 AM - 11:00 AM</MenuItem>
        <MenuItem value={20}>11:00 AM - 01:00 PM</MenuItem>
        <MenuItem value={30}>02:00 PM - 05:00 PM</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectTime;
