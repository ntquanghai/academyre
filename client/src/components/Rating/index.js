import * as React from "react";
import Rating from "@mui/material/Rating";
import { StarBorder } from "@mui/icons-material";

export default function ReadOnlyRating(props) {
  const { rating } = props;
  const [value, setValue] = React.useState(rating);
  return (
    <div className="flex space-x-4 items-center">
    <div className="text-yellow-300 font-semibold text-xl">{value}/5</div>
      <Rating
        name="half-rating-read"
        readOnly
        value={value}
        className="text-yellow-300"
        emptyIcon={
          <StarBorder fontSize="inherit" className="text-yellow-300" />
        }
      />
      <p>21,845 students</p>
    </div>
  );
}
// export const ControlledRating = () => {
//   const [value, setValue] = React.useState(2);

//   return (
//     <Box
//       sx={{
//         "& > legend": { mt: 2 },
//       }}
//     >
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </Box>
//   );
// };
// const ReadOnlyRating() {
//   const [value, setValue] = React.useState(2);

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//       <Typography component="legend">Read only</Typography>
//       <Rating name="read-only" value={value} readOnly />
//       <Typography component="legend">Disabled</Typography>
//       <Rating name="disabled" value={value} disabled />
//       <Typography component="legend">No rating given</Typography>
//       <Rating name="no-value" value={null} />
//     </Box>
//   );
// }
