import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectDepartments = () => {
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
          Select Department
        </MenuItem>
        <MenuItem value={1}>General</MenuItem>
        <MenuItem value={2}>Opthalmologist</MenuItem>
        <MenuItem value={3}>Pediatrician</MenuItem>
        <MenuItem value={4}>Orthopedics</MenuItem>
        <MenuItem value={5}>Dentist</MenuItem>
        <MenuItem value={6}>Laboratory and Diagnostic Care</MenuItem>
        <MenuItem value={7}>Cardiology</MenuItem>
        <MenuItem value={8}>Nutrition and Dietetics</MenuItem>
        <MenuItem value={9}>Neurology</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectDepartments;
