import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { Rating, Checkbox } from '@mui/material';
import RangeSlider from './slider'
import { pink, grey } from '@mui/material/colors';


export const CategoryAccordion = () => {
    const [ratingsChosen, setRatingsChosen] = useState("on")
    const [durationChosen, setDurationChosen] = useState()
    const [levelChosen, setLevelChosen] = useState()
    const [price, setPrice] = useState()
    const [value, setValue] = React.useState([0, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
    <div className = "w-80">
      <Accordion disableGutters className = "shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className = "text-black font-bold">Ratings</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="4.2"
                name="radio-buttons-group"
            >
                <div className='flex flex-row'>
                    <FormControlLabel 
                    className = "mr-0" onChange = {(event)=>console.log(event.target.value)} value={4.2} control={<Radio sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}/>}/>
                    <Rating className = "my-auto" size ="small" name="read-only" value={4.5} precision={0.5} readOnly />
                    <div className = "ml-2 text-black text-xs my-auto">4.5 and above <span className = "text-gray-500 text-xs">(3000)</span></div>
                </div>
                <div className='flex flex-row'>
                    <FormControlLabel 
                    className = "mr-0" onChange = {(event)=>console.log(event.target.value)} value={3.8} control={<Radio sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}/>}/>
                    <Rating className = "my-auto" size ="small" name="read-only" value={4.0} precision={0.5} readOnly />
                    <div className = "ml-2 text-black text-xs my-auto">4.0 and above <span className = "text-gray-500 text-xs">(3000)</span></div>
                </div>
                <div className='flex flex-row'>
                    <FormControlLabel 
                    className = "mr-0" onChange = {(event)=>console.log(event.target.value)} value={3.3} control={<Radio sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}/>}/>
                    <Rating className = "my-auto" size ="small" name="read-only" value={3.5} precision={0.5} readOnly />
                    <div className = "ml-2 text-black text-xs my-auto">3.5 and above <span className = "text-gray-500 text-xs">(3000)</span></div>
                </div>
                <div className='flex flex-row'>
                    <FormControlLabel 
                    className = "mr-0" onChange = {(event)=>console.log(event.target.value)} value={2.9} control={<Radio sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}/>}/>
                    <Rating className = "my-auto" size ="small" name="read-only" value={3.0} precision={0.5} readOnly />
                    <div className = "ml-2 text-black text-xs my-auto">Under 3.5 <span className = "text-gray-500 text-xs">(3000)</span></div>
                </div>
            </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className = "shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className = "text-black font-bold">Course duration</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='flex flex-col'>
                    <FormControlLabel control={<Checkbox sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }} size="small"/>}  label={<span className='text-sm'>Under 1 hour</span>}/>
                    <FormControlLabel control={<Checkbox sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }} size="small"/>}  label={<span className='text-sm'>1-3 hours</span>}/>
                    <FormControlLabel control={<Checkbox sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }} size="small"/>}  label={<span className='text-sm'>3-10 hours</span>}/>
                    <FormControlLabel control={<Checkbox sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }} size="small"/>}  label={<span className='text-sm'>10-18 hours</span>}/>
                    <FormControlLabel control={<Checkbox sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }} size="small"/>}  label={<span className='text-sm'>Over 18 hours</span>}/>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className = "shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className = "text-black font-bold">Price range</Typography>
        </AccordionSummary>
        <div className='flex flex-col'>
            <span className='mx-auto'><b></b>Price range: from <b>${value[0]}</b> to <b>${value[1]}</b></span>
            <AccordionDetails className="text-black mx-auto">
                <RangeSlider 
                    className ="mx-auto"
                    value = {value}
                    handleChange = {handleChange}
                    >
                </RangeSlider>
            </AccordionDetails>
        </div>
      </Accordion>
    </div>
  );
}