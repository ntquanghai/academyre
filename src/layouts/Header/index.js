import Box from "@mui/material/Box";

import { SearchField } from "../../components/Search";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";

export default function Header() {
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
      <Dropdown />
      <SearchField />
      <div className="flex space-x-4 mx-8">
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
