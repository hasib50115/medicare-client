import React from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import Calendar from '../calendar/Calendar';
import SelectTime from '../selectTime/SelectTime';
import SelectDepartments from '../selectDepartments/SelectDepartments';

const AppointmentModal = () => {
  return (
    <Box>
      <Container>
        <form>
          <Typography variant="h6" style={{ padding: '15px 0' }}>
            Book Appointment
          </Typography>

          <Calendar />
          <SelectTime />
          <SelectDepartments />
          <TextField
            sx={{ width: '90%', m: 1 }}
            id="outlined-size-small"
            placeholder="Name"
            name="name"
            size="small"
            type="text"
          />
          <TextField
            sx={{ width: '90%', m: 1 }}
            id="outlined-size-small"
            placeholder="Email"
            name="email"
            size="small"
            type="email"
          />
          <TextField
            sx={{ width: '90%', m: 1 }}
            id="outlined-size-small"
            placeholder="phone"
            name="phone"
            size="small"
            type="text"
          />
          <Button variant="contained" style={{ width: '90%' }}>
            Make An Appointment
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default AppointmentModal;
