import Box from "@mui/material/Box";
import { SearchField } from "../../components/Search";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from "react";


export default function Header() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="w-full flex items-center px-4 mt-2 shadow-sm bg-white">
      <Link to="/">
        <img
          className="mx-4 w-20 h-20"
          src="./logo-removebg-preview.png"
          alt=""
        />
      </Link>
      <FormControl className = "border-0" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <SearchField />
      <div className="flex ml-auto space-x-4 mx-8">
        <Link to="/login">
          <ButtonPrimary variant="outlined">Login</ButtonPrimary>
        </Link>
        <Link to="/signup">
          <ButtonPrimary variant="outlined" className="border-black text-black">Signup</ButtonPrimary>
        </Link>
      </div>
    </Box>
  );
}
