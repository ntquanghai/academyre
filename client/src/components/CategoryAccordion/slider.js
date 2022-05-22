import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const RangeSlider = (props) =>{
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

export default RangeSlider