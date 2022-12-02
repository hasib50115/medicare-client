import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const TestimonialsCard = (props) => {
  const { id, img, name, designation, desc } = props.item;
  return (
    <Card
      style={{
        marginRight: '15px',
        border: '0.2px solid #c6e5f9',
        height: '300px',
        padding: '10px',
      }}
    >
      <Box
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <img
          src={img}
          alt="patient-testimonial-img"
          style={{
            width: '100px',
            borderRadius: '50%',
          }}
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: 'center' }}
        >
          {name}
        </Typography>
        <Typography
          color="text.secondary"
          style={{ marginBottom: '10px', textAlign: 'center' }}
        >
          {designation}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialsCard;
