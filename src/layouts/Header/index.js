import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { SearchField } from "../../components/Search";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Header() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="w-full flex items-center justify-between mt-2">
      <Link to="/">
        <img
          className="mx-4"
          width={91}
          height={34}
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt=""
        />
      </Link>

      <SearchField />
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Homepage" href="/" />
        <LinkTab label="Login" href="/login" />
        <LinkTab label="Logout" href="/signup" />
      </Tabs>
    </Box>
  );
}
