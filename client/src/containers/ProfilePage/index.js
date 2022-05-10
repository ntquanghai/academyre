import React from "react";
import { Avatar } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import LockIcon from '@mui/icons-material/Lock';


export const ProfilePage = () => {
    return(
        <div className = "px-52 py-20 h-screen">
            <div className = "border border-black bg-white shadow-2xl flex flex-row">
                <div className = "border-r border-black py-8 w-60">
                    <Avatar
                        alt="Remy Sharp"
                        src="android-chrome-512x512.png"
                        sx={{ width: 120, height: 120, margin: "auto" }}
                    />
                    <div className = "text-center mt-4 font-semibold text-xl truncate w-full px-2">RandomUsername123</div>
                    <div className = "text-center max-w-full mt-1 text-gray-500 text-sm w-full px-2">Joined: Dec 12, 2021</div>
                    <div className = "text-center max-w-full text-gray-500 text-sm w-full px-2">Last active 1 year ago</div>
                    <div>
                        <List className = {""}>
                            <ListItem disablePadding>
                                <ListItemButton className = {"w-full justify-center"}>
                                    <ListItemText className = {"font-bold flex-grow-0"} primary="Profile" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton className = {"w-full justify-center"}>

                                    <ListItemText className = {"font-bold flex-grow-0"} primary="Courses" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx ={{}}>
                                <ListItemButton className = {"w-full justify-center"}>

                                    <ListItemText className = {"font-bold flex-grow-0"} primary="Account" />
                                </ListItemButton>
                            </ListItem>                         
                        </List>
                        <button className = "text-center w-full text-red-600 font-semibold ">Log out</button>
                    </div>
                </div>
                <div>
                    <div className = "p-8 font-semibold text-4xl">Your profile</div>
                    <div className = "px-20 py-2">adsfhjagsdfhjasdgf</div>
                </div>
            </div>
        </div>
    )
}