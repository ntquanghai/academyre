import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
//   const [value, setValue] = React.useState([0, 100]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={props.value}
        max = {50}
        onChange={props.handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}