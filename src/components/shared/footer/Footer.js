import React from 'react';
import './footer.css';
import {
  Box,
  CardActions,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

function createData(date, time) {
  return { date, time };
}

const rows = [
  createData('Mon', '9:00AM - 05:00PM'),
  createData('Tue', '9:00AM - 05:00PM'),
  createData('Wed', '9:00AM - 05:00PM'),
  createData('Thu', '9:00AM - 05:00PM'),
  createData('Fri', '9:00AM - 05:00PM'),
  createData('Sat', '9:00AM - 05:00PM'),
  createData('Sun', '9:00AM - 03:00PM'),
];

const Footer = () => {
  return (
    <Box className="footer">
      <Container className="footer-top-area">
        <Grid className="footer-top-area-container">
          {/* Logo */}
          <Grid item className="logo-container">
            <Box className="logo-img">
              <img
                src="https://i.ibb.co/7GMMZx6/medicare-logo-removebg-preview.png"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '15px',
                }}
                alt="medicare-logo"
              />
              <Typography
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,

                  letterSpacing: '.3rem',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
                variant="h5"
                noWrap
              >
                MEDICARE
              </Typography>
            </Box>
            <Typography className="logo-text-desc">
              There’re many variations passages of Lorem Ipsum available, but
              the majority have suffered.
            </Typography>
            <Box>
              <FacebookRoundedIcon
                className="social-icon"
                style={{ fontSize: '35px' }}
              />
              <TwitterIcon
                className="social-icon"
                style={{ fontSize: '35px', margin: '0 15px' }}
              />
              <YouTubeIcon
                className="social-icon"
                style={{ fontSize: '35px' }}
              />
              <PinterestIcon
                className="social-icon"
                sx={{ fontSize: '35px', margin: '0 15px' }}
              />
            </Box>
          </Grid>
          {/* Departments */}
          <Grid item xs={12} md={3}>
            <Typography style={{ color: '#77829D', fontWeight: '700' }}>
              DEPARTMENTS
            </Typography>
            <Typography style={{ color: '#77829D', padding: '10px' }}>
              <span className="dept-arrow">{'>'}</span> General
            </Typography>
            <Typography style={{ color: '#77829D', padding: '10px' }}>
              <span className="dept-arrow">{'>'}</span> Opthalmologist
            </Typography>
            <Typography style={{ color: '#77829D', padding: '10px' }}>
              <span className="dept-arrow">{'>'}</span> Pediatrician
            </Typography>
            <Typography style={{ color: '#77829D', padding: '10px' }}>
              <span className="dept-arrow">{'>'}</span> Orthopedics
            </Typography>
            <Typography style={{ color: '#77829D', padding: '10px' }}>
              <span className="dept-arrow">{'>'}</span> Dentists
            </Typography>
            <Typography style={{ color: '#77829D', padding: '10px' }}>
              <span className="dept-arrow">{'>'}</span> Cardiology
            </Typography>
            <Typography style={{ color: '#77829D', padding: '10px' }}>
              <span className="dept-arrow">{'>'}</span> Neurology
            </Typography>
          </Grid>
          {/* Opening Hours */}
          <Grid item xs={12} md={3}>
            <Typography style={{ color: '#77829D', fontWeight: '700' }}>
              OPENING HOURS
            </Typography>
            <TableContainer style={{ maxWidth: '90%' }}>
              <Table className="table" aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.date}>
                      <TableCell
                        style={{ border: 0, padding: '10px 0' }}
                        component="th"
                        scope="row"
                      >
                        <Typography className="table-date">
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell
                        style={{ border: 0, padding: '10px 0' }}
                        align="right"
                      >
                        <Typography style={{ color: '#77829D' }}>
                          {row.time}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          {/* Contactsts */}
          <Grid
            item
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              style={{
                color: '#77829D',
                fontWeight: '700',
              }}
            >
              GET IN TOUCH
            </Typography>
            <Grid className="get-in-touch-item">
              <Grid>
                <AddIcCallIcon className="get-in-touch-icon" />
              </Grid>
              <Grid>
                <Typography style={{ color: '#77829D' }}>Hotline:</Typography>
                <span style={{ color: '#77829D' }}>phone: 516-770-6058</span>
              </Grid>
            </Grid>
            <Grid className="get-in-touch-item">
              <Grid>
                <MailOutlineOutlinedIcon className="get-in-touch-icon" />
              </Grid>
              <Grid>
                <Typography style={{ color: '#77829D' }}>Email:</Typography>
                <span style={{ color: '#77829D' }}>phone: 516-770-6058</span>
              </Grid>
            </Grid>
            <Grid className="get-in-touch-item">
              <Grid>
                <AddLocationOutlinedIcon className="get-in-touch-icon" />
              </Grid>
              <Grid>
                <Typography style={{ color: '#77829D' }}>Address:</Typography>
                <span style={{ color: '#77829D' }}>phone: 516-770-6058</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr style={{ border: '1px solid #77829d', marginTop: '30px' }} />
        <Box className="footer-bottom-area">
          <span>Copyright ©2022 Medicare. All Rights Reserved</span>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
