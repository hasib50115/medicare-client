import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppointmentModal from '../../../shared/appointmentModal/AppointmentModal';
import Header from '../../../shared/header/Header';
import OpeningTime from '../../../shared/openingTime/OpeningTime';
import useData from './../../../../hooks/useData';
import Footer from './../../../shared/footer/Footer';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { services } = useData();
  console.log(services[serviceId]);
  const { img, title, desc1, desc2 } = services[serviceId];
  return (
    <div>
      <Header />
      {/* <h1>{serviceId}</h1> */}
      <Container>
        <Grid container spacing={2} style={{ padding: '30px 0 80px 0' }}>
          <Grid item xs={12} sm={12} md={4} align="center">
            <OpeningTime />
            <br />
            <AppointmentModal />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5" style={{ margin: '20px 0' }}>
              {title}
            </Typography>
            <img
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
              src={img}
              alt="inhabiliation"
            />
            <Typography style={{ textAlign: 'justify', padding: '20px 0' }}>
              {desc1}
            </Typography>
            <Typography style={{ textAlign: 'justify', padding: '0 0 20px' }}>
              {desc2}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
