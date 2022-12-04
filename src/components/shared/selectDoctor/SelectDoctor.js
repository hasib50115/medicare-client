import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectDoctor = () => {
  const [doctor, setDoctor] = React.useState('');

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1 }} style={{ width: '90%' }}>
      <Select
        value={doctor}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        style={{ textAlign: 'left', color: 'grey' }}
      >
        <MenuItem value="" disabled style={{ cursor: 'none' }}>
          Select Doctor
        </MenuItem>
        <MenuItem value={1}>Dr. Andrew Smith, MD</MenuItem>
        <MenuItem value={2}>Dr. Richard </MenuItem>
        <MenuItem value={3}>Dr. Jennifer William</MenuItem>
        <MenuItem value={4}>Dr. Steven Paul</MenuItem>
        <MenuItem value={5}>Dr. Sopiha</MenuItem>
        <MenuItem value={6}>Dr. Mary Ann</MenuItem>
        <MenuItem value={7}>Dr. Rohit Sharma</MenuItem>
        <MenuItem value={8}>Dr. Allan Jaffe</MenuItem>
        <MenuItem value={9}>Dr. Mrittika Goel</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectDoctor;
