import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FormControlLabel } from '@mui/material';
import { Rating, Checkbox } from '@mui/material';
import { pink, grey } from '@mui/material/colors';
import { useDispatch } from "react-redux";
import { TOGGLE_FINISHED_SESSION } from '../../redux/type';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const LessonAccordion = (props) =>{
  const [expanded, setExpanded] = React.useState('panel1'); 

  const { todo } = props;
  const { finished, name, id } = todo;
  const dispatch = useDispatch();

  const isChecked = finished ? "completed" : null;

  const onCheck = () => {
    const action = {
      payload: id,
      type: TOGGLE_FINISHED_SESSION
    }
    console.log(action)
    dispatch(action)
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className = "flex flex-row border-none">
      <Accordion className = {"border-none "+isChecked} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <div className = "flex flex-row w-full justify-between">
            <AccordionSummary className="flex-grow" aria-controls="panel1d-content" id="panel1d-header">
                <Typography className = "text-black my-auto">{name}</Typography>
            </AccordionSummary>
        <FormControlLabel control={<Checkbox sx={{
            color: grey[900],
            '&.Mui-checked': {
                color: grey[900],
            },
            }} checked = {finished} onChange = {onCheck} className = "ml-auto"/>}/>
        </div>
        <AccordionDetails>
          <Typography className = "text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>    
    </div>
  );
}

export default LessonAccordion