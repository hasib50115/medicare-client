import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Container, Typography } from '@mui/material';
import TestimonialsCard from './TestimonialsCard';
import { useEffect, useState } from 'react';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  laptop: {
    breakpoint: { max: 1279, min: 769 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 481 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  const [tdata, setTdata] = useState([]);

  useEffect(() => {
    fetch('./testimonials.json')
      .then((res) => res.json())
      .then((data) => setTdata(data));
  }, []);

  return (
    <Box
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url("https://i.ibb.co/tQMLKqN/Group-6698.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <Typography
          style={{
            color: '#2AA7FF',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Clients Says About Us
        </Typography>
        <Typography
          variant="h4"
          style={{
            marginBottom: '50px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Our Patient's Testimonials
        </Typography>
        <Carousel responsive={responsive} infinite={true}>
          {tdata.map((item, id) => (
            <TestimonialsCard item={item} key={item.id}></TestimonialsCard>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Testimonials;
