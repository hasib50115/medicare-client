import React from 'react';
import './chooseUs.css';
import { Container, Box, Typography, Grid, Card } from '@mui/material';

const ChooseUs = () => {
  return (
    <Box className="chooseUS">
      <Container>
        <Typography
          variant="h4"
          style={{
            marginBottom: '60px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Why Choose Us?
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4} className="gridItem">
            <Card id="card">
              <Box className="imgBox">
                <img
                  className="img"
                  src="https://i.ibb.co/3fFSwcH/specialized-services.png"
                  alt="medicare-features-and-facilities"
                  srcset=""
                />
              </Box>
              <Typography variant="h5">Specialised Service</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="gridItem">
            <Card id="card">
              <Box className="imgBox">
                <img
                  className="img"
                  src="https://i.ibb.co/cvPDw0p/24hrs.png"
                  alt="medicare-features-and-facilities"
                  srcset=""
                />
              </Box>
              <Typography variant="h5">24/7 Advanced Care</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="gridItem">
            <Card id="card">
              <Box className="imgBox">
                <img
                  className="img"
                  src="https://i.ibb.co/G5rS7NR/emergency-service-24hrs.png"
                  alt="medicare-features-and-facilities"
                  srcset=""
                />
              </Box>
              <Typography variant="h5">Emergency Care</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="gridItem">
            <Card id="card">
              <Box className="imgBox">
                <img
                  className="img"
                  src="https://i.ibb.co/P6KT6s6/medicare-friendly-doctor.png"
                  alt="medicare-features-and-facilities"
                  srcset=""
                />
              </Box>
              <Typography variant="h5">Friendly Doctor</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className="gridItem">
            <Card id="card">
              <Box className="imgBox">
                <img
                  className="img"
                  src="https://i.ibb.co/472yMy3/advanced-lab-simple-blue.png"
                  alt="medicare-features-and-facilities"
                  srcset=""
                />
              </Box>
              <Typography variant="h5">Advanced Lab</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="gridItem">
            <Card id="card">
              <Box className="imgBox">
                <img
                  className="img"
                  src="https://i.ibb.co/QXZg7s9/get-results-onlie.png"
                  alt="medicare-features-and-facilities"
                  srcset=""
                />
              </Box>
              <Typography variant="h5">Get Results Online</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChooseUs;
