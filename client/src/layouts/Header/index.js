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
import { useMediaQuery } from "../../hooks/getScreenSize";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Divider } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material"; 


export default function Header() {
  const viewport = useMediaQuery();
  const { width, height } = viewport;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const queryName = (string) => {
    return string.toLowerCase().replace(" ","-")
  }

  const drawer = (
    <div>
      <Toolbar>
        <div className = "flex flex-col py-4">
          <div className = "font-semibold hover:opacity-80">
            Sign in
          </div>
          <div className = "font-semibold hover:opacity-80">
            Sign up
          </div>
        </div>
      </Toolbar>
      <Divider />
        <div className = "font-semibold px-4 pt-4">
          Categories
        </div>
          <List className = "px-4">
            {['Programming Languages', 'Engineering', 'Mathematics', 'Software Engineering','Game Development','Web Development'].map((text, index) => (
              <div className = "flex flex-col">
                <a href= {"category/"+queryName(text)}>
                  {text}
                </a>
              </div>
            ))}
          </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <div>
            {text}
          </div>
        ))}
      </List> */}
    </div>
  );


  if(width >= 800) {
    return (
      <div>
        <Box className="w-full flex items-center px-4 border-b border-gray-300 bg-white">      
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
  else {
    return (
      <div>
        <Box className="w-full flex items-center px-4 border-b border-gray-300 bg-white">   
        <MenuIcon className = "cursor-pointer hover:opacity-75" onClick = {handleDrawerToggle}></MenuIcon>
        <div className = "w-full">
          <Link to="/">
            <img
              className="w-20 h-20 mx-auto"
              src="\logo-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "240px" },
          }}
        >
          {drawer}
        </Drawer>   
        {/* <Dropdown/> */}
      </Box>
      {/* <HeaderCategoryBar/> */}
      </div>
        
    );
  }
  
}
