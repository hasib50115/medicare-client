import React from 'react';
import './ourProcess.css';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const OurProcess = () => {
  return (
    <Box className="our-process-area">
      <Container className="our-process-container">
        <Typography className="title-small">How Does It Works?</Typography>
        <Typography
          className="title"
          variant="h4"
          style={{ fontWeight: 'bold' }}
        >
          Our Working Process
        </Typography>
        <Grid container spacing={2}>
          {/* card-01  */}
          <Grid item xs={12} sm={6} md={3}>
            <Box className="our-process-card">
              <Box className="our-process-card-img-area">
                <Box className="our-process-card-img-container">
                  <CardMedia
                    component="img"
                    image="https://i.ibb.co/YWYPdb7/medicare-appointment.png "
                    alt="green iguana"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
                <Box className="our-process-card-number-container">
                  <Box className="our-process-card-number-bg">
                    <Typography
                      className="our-process-card-number"
                      variant="h5"
                    >
                      01
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <CardContent className="our-process-card-text">
                <Typography gutterBottom variant="h5" component="div">
                  Select Expert Doctor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Box>
          </Grid>
          {/* card-02  */}
          <Grid item xs={12} sm={6} md={3}>
            <Box className="our-process-card">
              <Box className="our-process-card-img-area">
                <Box className="our-process-card-img-container">
                  <CardMedia
                    component="img"
                    image="https://i.ibb.co/Sw8K8Qd/mdeicare-make-appointment.png"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
                <Box className="our-process-card-number-container">
                  <Box className="our-process-card-number-bg">
                    <Typography
                      className="our-process-card-number op-card-num-02"
                      variant="h5"
                    >
                      02
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <CardContent className="our-process-card-text">
                <Typography gutterBottom variant="h5" component="div">
                  Make Appointment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Box>
          </Grid>
          {/* card-03  */}
          <Grid item xs={12} sm={6} md={3}>
            <Box className="our-process-card">
              <Box className="our-process-card-img-area">
                <Box className="our-process-card-img-container">
                  <CardMedia
                    component="img"
                    image="https://i.ibb.co/pfKF801/medicare-consultation.png"
                    alt="green iguana"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
                <Box className="our-process-card-number-container">
                  <Box className="our-process-card-number-bg">
                    <Typography
                      className="our-process-card-number op-card-num-03"
                      variant="h5"
                    >
                      03
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <CardContent className="our-process-card-text">
                <Typography gutterBottom variant="h5" component="div">
                  Get Consultation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Box>
          </Grid>
          {/* card-04  */}
          <Grid item xs={12} sm={6} md={3}>
            <Box className="our-process-card">
              <Box className="our-process-card-img-area">
                <Box className="our-process-card-img-container">
                  <CardMedia
                    component="img"
                    image="https://i.ibb.co/bg2YzLj/young-male-psysician-with-patient-measuring-blood-pressure.jpg"
                    alt="green iguana"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
                <Box className="our-process-card-number-container">
                  <Box className="our-process-card-number-bg">
                    <Typography
                      className="our-process-card-number op-card-num-04"
                      variant="h5"
                    >
                      04
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <CardContent className="our-process-card-text">
                <Typography gutterBottom variant="h5" component="div">
                  Get Care & Relief
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurProcess;
