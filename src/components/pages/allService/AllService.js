import './allService.css';
import { Container, Box, Typography } from '@mui/material';
import useData from '../../../hooks/useData';
import Service from '../../home/services/serviceCard/ServiceCard';
import Header from '../../shared/header/Header';
import Footer from './../../shared/footer/Footer';

const AllService = () => {
  const { services } = useData();
  return (
    <div className="allService">
      <Header />
      <Container className="allServiceContainer">
        <Box className="wTitle">
          <Typography
            variant="h2"
            style={{ fontWeight: '500', color: '#77829D' }}
          >
            Our Services
          </Typography>
        </Box>
        {/*   service cards */}
        <Box className="servicesCards">
          {services.map((service, index) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default AllService;
