import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { id, title, desc1, desc2, img } = props.service;
  let trimmedString = desc1.substr(0, 150);
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
  );
  return (
    <Card
      sx={{
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      style={{ paddingBottom: '15px', margin: '10px' }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'justify' }}
          >
            {trimmedString}
            <Link to={`/services/${id}`} style={{ textDecoration: 'none' }}>
              <Button size="small">Lern More</Button>
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          className="serviceCardButton"
          style={{ marginLeft: '5px', backgroundColor: '#2AA7FF' }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default Service;
