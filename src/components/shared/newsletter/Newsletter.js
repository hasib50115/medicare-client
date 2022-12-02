import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <Box style={{ padding: '100px 0' }}>
      <Container style={{ alignItems: 'center' }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <Typography variant="h5">We have some</Typography>
            <Typography
              variant="h4"
              style={{ fontWeight: 'bold', color: '#2189cf' }}
            >
              Good news
            </Typography>
            <Typography>
              Sign up for Medicare newsletter to receive all the new offers and
              discounts from Medicare clinic. Discounts are only valid four our
              newsletter subscribers.
            </Typography>
            <Box>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '20px 0',
                  position: 'relative',
                }}
              >
                <input
                  className="input"
                  size="small"
                  placeholder="Enter Your Email"
                />

                <Button
                  style={{
                    color: '#ffffff',
                    backgroundColor: '#2AA7FF',
                    padding: '0 20px',
                    position: 'absolute',
                    right: 0,
                    height: '100%',
                  }}
                >
                  Subscribe
                </Button>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="newsletterImg">
            <img
              style={{ maxWidth: '100%', borderRadius: '15px' }}
              src="https://i.ibb.co/3Tt8CGD/newsletter.png"
              alt="newsletter-img"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Newsletter;
