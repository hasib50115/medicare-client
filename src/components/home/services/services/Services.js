import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

import './services.css';
import Service from '../serviceCard/ServiceCard';
import useData from '../../../../hooks/useData';

const Services = () => {
  const { services } = useData();
  return (
    <div className="servicesPage">
      <Container>
        <Box className="wTitle">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            Our Services
          </Typography>
        </Box>
        {/*   service cards */}
        <Box className="servicesCards">
          {services.slice(0, 6).map((service, index) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Services;
