import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import './appointment.css';
import Calendar from './../../shared/calendar/Calendar';
import SelectTime from './../../shared/selectTime/SelectTime';
import SelectDepartments from './../../shared/selectDepartments/SelectDepartments';

const Appointment = () => {
  return (
    <Box className="appointment-section">
      <Header />

      <Container className="appointment-container">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6} id="appointment-form-container">
            <form className="appointment-form">
              <Typography variant="h6" className="appointment-form-title">
                Make An Appointment
              </Typography>
              <Box className="calender-container">
                <Calendar />
              </Box>
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
              <Button
                variant="contained"
                style={{ width: '90%', marginTop: '8px' }}
              >
                Book Appointment
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box className="appointment-banner-container">
              <img
                className="appointment-banner-img"
                src="https://i.ibb.co/54wS7Qr/ap-bg.jpg"
                alt="medicare-appointment-banner"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Appointment;
