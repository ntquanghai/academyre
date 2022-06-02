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
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { logout } from "../../context/auth/AuthReducer";

export default function Header() {
  const viewport = useMediaQuery();
  const { width, height } = viewport;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = (e) => {
    e.preventDefault();
    logout();

  }
  const isLoggedIn = sessionStorage.getItem("isAuth");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const queryName = (string) => {
    return string.toLowerCase().replace(" ","-")
  }

  const drawer = (
    <div>
      {!isLoggedIn
      ?
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
              <Link to= {"category/"+queryName(text)}>
                {text}
              </Link>
            </div>
          ))}
        </List>
    <Divider />
     </div>
    :
    <div className = "flex flex-col">
      <Toolbar>
        <div className = "flex flex-col py-4">
          <div className = "font-semibold hover:opacity-80">
            Account
          </div>
          <div className = "flex flex-row mt-2">
          <Avatar 
              className = "hover:opacity-80 cursor-pointer mr-2"
              sx={{ bgcolor: deepOrange[500]  }}>N</Avatar>
            <div className = "font-semibold my-auto">
              Username
            </div>
          </div>
          <Link className = "mt-2" to = "profile/edit-profile">
            <div>
              Edit profile
            </div>
          </Link>
          <Link className = "" to = "profile/edit-profile">
            <div>
              Your courses
            </div>
          </Link>
          <Link className = "" to = "profile/edit-profile">
            <div>
              Account settings
            </div>
          </Link>
        </div>
      </Toolbar>
      <Divider />
        <div className = "font-semibold px-4 pt-4">
          Categories
        </div>
          <List className = "px-4">
            {['Programming Languages', 'Engineering', 'Mathematics', 'Software Engineering','Game Development','Web Development'].map((text, index) => (
              <div className = "flex flex-col">
                <Link to= {"category/"+queryName(text)}>
                  {text}
                </Link>
              </div>
            ))}
          </List>
      <Divider />
      <div className = "mt-2 ml-4 font-bold text-lg text-red-500" onClick = {()=>localStorage.removeItem("isAuth")}>
        Log out
      </div>

    </div>
      }
      
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
      <SearchField />
      {!isLoggedIn
      ?
          <div className="flex ml-auto space-x-4">
            <Link to="/login">
              <button className = "py-2 px-4 font-bold border-black border hover:opacity-50 text-sm">Log in</button>
            </Link>
            <Link to="/signup">
            <button className = "py-2 px-4 font-bold bg-black text-white border hover:opacity-50 text-sm">Sign up</button>
            </Link>
          </div>
      :
            <div className="flex ml-auto px-10 space-x-4">
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <Avatar 
               
                    className = "hover:opacity-80 cursor-pointer"
                    sx={{ bgcolor: deepOrange[500]  }}>N</Avatar>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <div className ="px-10 py-4">
                  Welcome, <b>username</b>
                  </div>
                  <Divider/>
                  <div className = "mt-2 ">
                    <Link to = "/profile/edit-profile">
                      <MenuItem className = "text-sm" onClick={handleClose}>Edit profile</MenuItem>
                    </Link>
                    <Link to = "profile/courses">
                      <MenuItem className = "text-sm" onClick={handleClose}>My courses</MenuItem>
                    </Link>
                    <Link to = "profile/account">
                      <MenuItem className = "text-sm" onClick={handleClose}>Account settings</MenuItem>
                    </Link>
                      <MenuItem className = "text-red-600 text-sm" onClick = {()=>sessionStorage.removeItem("isAuth")}>Logout</MenuItem>
                  </div>
                </Menu>
              </div>
            </div>
            
      }      
    </Box>
    <HeaderCategoryBar/>
    </div>
    );
  }
  else {
    return (
      <div>
        <Box className="w-full flex items-center px-4 border-b border-gray-300 bg-white h-20">   
        <MenuIcon className = "cursor-pointer hover:opacity-75" onClick = {handleDrawerToggle}></MenuIcon>
        <div className = "absolute left-1/2 -translate-x-1/2 h-20">
          <div className="mx-auto">
            <Link to="/">
              <img
                className="w-20 h-20 "
                src="\logo-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>
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
