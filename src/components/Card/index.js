import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductCard() {
  return (
    <Card className='w-full'>
      <CardActionArea className='flex'>
        <CardMedia
          component="img"
          height="140"
          image="https://img-c.udemycdn.com/course/480x270/1637244_3d7e.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="subtitle1" color="black">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}