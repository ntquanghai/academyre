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
import { HeaderCategoryBar } from "../../components/HeaderCategoryBar";

export default function Header() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box className="w-full flex items-center px-4 mt-2 border-b border-gray-300 bg-white">      
      <Link to="/">
        <img
          className="w-20 h-20"
          src="\logo-removebg-preview.png"
          alt=""
        />
      </Link>
      {/* <Dropdown/> */}
      <SearchField />
      <div className="flex ml-auto space-x-4">
        <Link to="/login">
          <button className = "py-2 px-4 font-bold border-black border hover:opacity-50 text-sm">Log in</button>
        </Link>
        <Link to="/signup">
        <button className = "py-2 px-4 font-bold bg-black text-white border hover:opacity-50 text-sm">Sign up</button>
        </Link>
      </div>
    </Box>
    <HeaderCategoryBar/>
    </div>
      
  );
}
