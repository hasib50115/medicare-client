import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TeamCard from '../teamCard/TeamCard';
import './team.css';

const Team = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./doctors.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Box style={{ paddingBottom: '70px' }}>
      <Box className="team-banner">
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box style={{ padding: '20px' }}>
                <Typography>Dr Shoumik Pitter</Typography>
                <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                  Our <span style={{ color: '#2189cf' }}>Team</span>
                </Typography>
                <Typography style={{ margin: '20px 0' }}>
                  Objectively innovate empowered manufactured products whereas
                  parallel platforms. Holisticly predominate extensible testing
                  procedures for reliable supply chains. Dramatically engage
                  top-line web services vis-a-vis cutting-edge deliverables.
                </Typography>
                <img
                  style={{ maxWidth: '150px' }}
                  src="https://i.ibb.co/SnHNS3f/signature.png"
                  alt="ceo-signature-of-mediko"
                />
              </Box>
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item xs={12} sm={12} md={4}>
              <img
                style={{ maxWidth: '100%' }}
                src="https://i.ibb.co/jH13td0/ceo-and-founder-of-mediko-healthcare.png"
                alt="dr-shoumik-pitter-ceo-and-founder-of-mediko"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <div className="dContainer">
          {services.slice(0, 4).map((service, index) => (
            <TeamCard service={service} key={service.id}></TeamCard>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Team;
