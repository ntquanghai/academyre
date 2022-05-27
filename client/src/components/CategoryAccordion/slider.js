import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useMediaQuery } from "../../hooks/getScreenSize";

const RangeSlider = (props) =>{
  const viewport = useMediaQuery();
  const { width, height } = viewport;

  if(width >= 800) {
    return (
      <Box sx={{ width: 250 }}>
        <Slider
          className = "text-black"
          getAriaLabel={() => 'Price range'}
          value={props.value}
          max = {50}
          onChange={props.handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  }
  else {
    return (
      <Box sx={{ width: 200, height: 30 }}>
        <Slider
          className = "text-black"
          getAriaLabel={() => 'Price range'}
          value={props.value}
          max = {50}
          onChange={props.handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  }
  
}

export default RangeSlider