import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const TeamCard = (props) => {
  const { name, designation, img } = props.service;
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" alt="green iguana" height="auto" image={img} />
      <CardContent>
        <Typography color="text.secondary">{designation}</Typography>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <FacebookRoundedIcon sx={{ color: '#55acee', cursor: 'pointer' }} />
        <TwitterIcon sx={{ color: '#55acee', cursor: 'pointer' }} />
      </CardActions>
    </Card>
  );
};

export default TeamCard;
