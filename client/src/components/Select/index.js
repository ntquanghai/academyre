import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const { data, className } = props;
  const [value, setValue] = React.useState("");
  const classes = className;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="value"
          onChange={handleChange}
          className={classes}
        >
          {data.map((criteria, index) => (
            <MenuItem value={criteria} key={index}>{criteria}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
