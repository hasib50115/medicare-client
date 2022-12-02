import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

function createData(date, time) {
  return { date, time };
}

const rows = [
  createData('Monday', '9:00-17:00'),
  createData('Tuesday', '9:00-17:00'),
  createData('Wednesday', '9:00-17:00'),
  createData('Thursday', '9:00-17:00'),
  createData('Friday', '9:00-17:00'),
  createData('Saturday', '9:00-15:00'),
  createData('Sunday', 'Closed'),
];

const OpeningTime = () => {
  return (
    <Box style={{ width: '80%' }}>
      <Typography variant="h5" align="center" style={{ padding: '20px 0' }}>
        Opening Hours
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OpeningTime;
