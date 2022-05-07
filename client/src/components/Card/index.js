import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    e.preventDefault();
    navigate("/courseDetail");
  };
  return (
    <Card className="w-3/4 self-center" onClick={onClickHandler}>
      <CardActionArea className="flex">
        <CardMedia
          component="img"
          height="120"
          image="https://img-c.udemycdn.com/course/480x270/1637244_3d7e.jpg"
          alt="green iguana"
        />
        <CardContent className="flex">
          <div>
            <Typography gutterBottom variant="h5" component="div">
              Title
            </Typography>
            <Typography variant="subtitle1" color="black">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div>
          <div>
            <div className="font-bold text-md">$84.99</div>
            <div className="text-sm text-gray-500 line-through">old Price</div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
