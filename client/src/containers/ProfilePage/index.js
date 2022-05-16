import React, {useState, useRef, useCallback, useEffect} from "react";
import { Avatar } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";



export const ProfilePage = () => {
    const [imgSrc, setImgSrc] = useState(null);
    const [crop, setCrop] = useState({ aspect:1 });
    const [output, setOutput] = useState(null);
    const imgRef = useRef(null)
    const [completedCrop, setCompletedCrop] = useState(null)
    const [showLoading, setShowLoading] = useState(false)
    const [pageState, setPageState] = useState("profile")

    useEffect(() => {
        if((window.location.pathname)==="/profile/edit-profile/" || (window.location.pathname)=="/profile/edit-profile") {
            setPageState("profile")
        }
        else if((window.location.pathname)==="/profile/courses/" || (window.location.pathname)=="/profile/courses") {
            setPageState("courses")
        }
        else if((window.location.pathname)==="/profile/account/" || (window.location.pathname)=="/profile/account") {
            setPageState("account")
        }
    })
    
    function onSelectFile(e) {
        if (e.target.files && e.target.files.length > 0) {
          setCrop(undefined) // Makes crop preview update between images.
          const reader = new FileReader()
          reader.addEventListener('load', () =>
            setImgSrc(reader.result.toString() || ''),
          )
          reader.readAsDataURL(e.target.files[0])
        }
    }

    const cropImageNow = (image, crop) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')
        
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        const pixelRatio = window.devicePixelRatio
      
        canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
        canvas.height = Math.floor(crop.height * scaleY * pixelRatio)
      
        ctx.scale(pixelRatio, pixelRatio)
        ctx.imageSmoothingQuality = 'high'
      
        const cropX = crop.x * scaleX
        const cropY = crop.y * scaleY
      
        const centerX = image.naturalWidth / 2
        const centerY = image.naturalHeight / 2
      
        ctx.save()
      
        ctx.translate(-cropX, -cropY)
        ctx.translate(centerX, centerY)
        ctx.translate(-centerX, -centerY)
    
        if(image) {
            ctx.drawImage(
                image,
                0,
                0,
                image.naturalWidth,
                image.naturalHeight,
                0,
                0,
                image.naturalWidth,
                image.naturalHeight,
              )
        }
      
        ctx.restore()
          
        const base64Image = canvas.toDataURL('image/jpeg');
        setOutput(base64Image);
    };

    function onImageLoad(e) {
        const { width, height } = e.currentTarget
        setCrop(centerAspectCrop(width, height, 1))
      }

    function centerAspectCrop(
        mediaWidth,
        mediaHeight,
        aspect
      ) {
        return centerCrop(
          makeAspectCrop(
            {
              unit: '%',
              width: 90,
            },
            1,
            mediaWidth,
            mediaHeight,
          ),
          mediaWidth,
          mediaHeight,
        )
      }
       
    if(pageState) {
        if(pageState == "profile") {
            return(
                <div style = {{minHeight: "100vh",width:"1000px"}} className = "m-auto my-5 h-full">
                    <div className = "border border-gray-500 bg-white flex flex-row box-content">
                        <div className = "shrink-0 border-r bg-sky-200 border-gray-500 py-8 !w-60">
                            <Avatar
                                alt="Remy Sharp"
                                src="\android-chrome-512x512.png"
                                sx={{ width: 120, height: 120, margin: "auto" }}
                            />
                            <div className = "text-center mt-4 font-semibold text-xl truncate w-full px-2">RandomUsername123</div>
                            <div className = "text-center max-w-full mt-1 text-gray-500 text-sm w-full px-2">Joined: Dec 12, 2021</div>
                            <div className = "text-center max-w-full text-gray-500 text-sm w-full px-2">Last active 1 year ago</div>
                            <div>
                                <List className = {""}>
                                    <ListItem disablePadding>
                                        <Link className = "w-full" to = "/profile/edit-profile" onClick = {() => {setPageState("profile")}} >     
                                            <ListItemButton className = {"w-full justify-center"}>
                                                <ListItemText className = {"font-bold flex-grow-0"} primary="Profile" />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                <ListItem disablePadding>
                                    <Link className = "w-full" to = "/profile/courses" onClick = {() => {setPageState("courses")}} >                           
                                        <ListItemButton className = {"w-full justify-center"}>
                                            <ListItemText className = {"font-bold flex-grow-0"} primary="Courses"/>
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding sx ={{}}>
                                    <Link className = "w-full" to = "/profile/account" onClick = {() => {setPageState("account")}} >
                                        <ListItemButton className = {"w-full justify-center"}>
                                            <ListItemText className = {"font-bold flex-grow-0"} primary="Account" />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>  
                                <ListItem disablePadding sx ={{}}>
                                    <ListItemButton className = {"w-full justify-center"}>
                                        <ListItemText className = {"text-center w-full text-red-600 font-bold"} primary="Log out" />
                                    </ListItemButton>
                                </ListItem>                         
                       
                            </List>
                            </div>
                        </div>
                        <div className = "flex-grow">
                            <div className = "  bg-sky-100 border-b border-gray-500 p-8 text-center">
                                <div className = " font-semibold text-3xl">Your profile</div>
                                <div className = " font-normal text-base">View and edit your personal information here.</div>
                            </div>
                                <div className = "">
                                    <div className = "p-8" >
                                    <div className = "text-xl font-semibold ">
                                        Basic information
                                    </div>
                                    <TextField fullWidth className = {"mt-4"} id="outlined-basic" label="Username" variant="outlined" />
                                    <TextField fullWidth className = {"mt-4"} id="outlined-basic" label="First Name" variant="outlined" />
                                    <TextField fullWidth className = {"mt-4"} id="outlined-basic" label="Last Name" variant="outlined" />
                                    <TextField
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Bio (Optional)"
                                        placeholder="Tell us some things about yourself!"
                                        multiline
                                        rows={4}
                                        className = {"mt-4"}
                                    />
                                   <TextField
                                        fullWidth
                                        label="Facebook"
                                        id="outlined-start-adornment"
                                        sx={{ mt: 4}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">facebook.com/</InputAdornment>,
        
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Github"
                                        id="outlined-start-adornment"
                                        sx={{ my: 4}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">github.com/</InputAdornment>,
                                            
                                        }}
                                    />
                                    </div>
                                    <div className = "py-2 border-t border-gray-300">
                                    <div className = "text-xl font-semibold px-8 pt-8">
                                        Profile picture
                                    </div>
                                    {!imgSrc 
                                    ?
                                    
                                    <div className = "px-8 pb-8">
                                        <div className = "border my-8 border-gray-400"style = {{width: "400px", height: "400px"}}>
                                            <img src="\whitebg.png" />
                                        </div>
                                        <label htmlFor="myImage" className="text-white btn p-3 border font-semibold border-blue-500 bg-blue-400 cursor-pointer hover:opacity-50">Select Image</label>
                                        <input
                                            className = "invisible"
                                            type="file"
                                            id="myImage"
                                            onChange={onSelectFile}
                                            accept = "image/png, image/jpg, image/jpeg"
                                        />
                                    </div> 
                                    
                                    :
                                    <div className = "my-8">
                                    {!output
                                    ?
                                        <div className = "px-8 pb-8">
                                            <div className = "my-8">
                                                <ReactCrop 
                                                    crop={crop}
                                                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                                                    onComplete={(c) => setCompletedCrop(c)}
                                                    aspect={1}
                                                    minWidth={200}
                                                    minHeight={200}
                                                    >
                                                    <div>
                                                        <img ref = {imgRef} onLoad = {onImageLoad} style = {{maxWidth: "500px", maxHeight:"500px"}} className = "border border-black" src={imgSrc}/>
                                                    </div>
                                                </ReactCrop>
                                            </div>
                                            <label htmlFor="myCropImage" className="btn p-3 border font-semibold border-blue-300 bg-blue-200 cursor-pointer hover:opacity-50">Crop image</label>
                                                <button
                                                    className = "invisible"
                                                    id="myCropImage"
                                                    onClick={() => cropImageNow(imgRef.current,completedCrop)}
                                                />
                                        </div>
        
                                    :
                                        <div className = "px-8 pb-8">
                                            {!showLoading
                                            ?
                                                <div>
                                                    <img onLoad={() => {
                                                        const timeId = setTimeout(() => {
                                                            setShowLoading(true)
                                                        },2000)
                                                        return () => {
                                                            clearTimeout(timeId)
                                                        }
                                                    }} ref = {imgRef} style = {{maxWidth: "500px", maxHeight:"500px"}} className = "border border-black" src={imgSrc}/>
                                                    <Backdrop
                                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                        open={!showLoading}
                                                    >
                                                        <CircularProgress color="inherit" />
                                                    </Backdrop>
                                                </div>
                                            :
                                            <img style = {{maxWidth: "200px", maxHeight:"200px"}} className = "border border-black" src={output} />
                                            }
                                        </div>
                                    }
                                    </div>
                                    }
                                </div>
                            </div>
                            <div className = "ml-auto justify-end bg-blue-100 w-full h-20 border-t border-gray-500 px-8 flex">
                                <button className=" my-auto text-white px-4 py-2 border font-semibold border-blue-500 bg-blue-400 cursor-pointer hover:opacity-50">Save</button>
                            </div>
                        </div>
                    </div>
                </div>  
            )
        }
        else if(pageState == "courses") {
            return(
                <div style = {{minHeight: "100vh", width:"1000px"}} className = "m-auto my-5 h-full">
                    <div className = "border border-gray-500 bg-white flex flex-row box-content">
                        <div className = "shrink-0 border-r bg-sky-200 border-gray-500 py-8 w-60">
                            <Avatar
                                alt="Remy Sharp"
                                src="\android-chrome-512x512.png"
                                sx={{ width: 120, height: 120, margin: "auto" }}
                            />
                            <div className = "text-center mt-4 font-semibold text-xl truncate w-full px-2">RandomUsername123</div>
                            <div className = "text-center max-w-full mt-1 text-gray-500 text-sm w-full px-2">Joined: Dec 12, 2021</div>
                            <div className = "text-center max-w-full text-gray-500 text-sm w-full px-2">Last active 1 year ago</div>
                            <div>
                                <List className = {""}>
                                    <ListItem disablePadding>
                                        <Link className = "w-full" to = "/profile/edit-profile" onClick = {() => setPageState("profile")}>     
                                            <ListItemButton className = {"w-full justify-center"}>
                                                <ListItemText className = {"font-bold flex-grow-0"} primary="Profile" />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                <ListItem disablePadding>
                                    <Link className = "w-full" to = "/profile/courses" onClick = {() => setPageState("courses")}>                           
                                        <ListItemButton className = {"w-full justify-center"}>
                                            <ListItemText className = {"font-bold flex-grow-0"} primary="Courses" />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding sx ={{}}>
                                    <Link className = "w-full" to = "/profile/account" onClick = {() => setPageState("account")}>
                                        <ListItemButton className = {"w-full justify-center"}>
                                            <ListItemText className = {"font-bold flex-grow-0"} primary="Account" />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>    
                                <ListItem disablePadding sx ={{}}>
                                    <ListItemButton className = {"w-full justify-center"}>
                                        <ListItemText className = {"text-center w-full text-red-600 font-bold"} primary="Log out" />
                                    </ListItemButton>
                                </ListItem>                         
                            </List>
                                {/* <button className = "text-center w-full text-red-600 font-semibold ">Log out</button> */}
                            </div>
                        </div>
                        <div className = "flex flex-col flex-grow">
                            <div className = "  bg-sky-100 border-b border-gray-500 p-8 text-center">
                                <div className = " font-semibold text-3xl">Your courses</div>
                                <div className = " font-normal text-base">View your latest, enrolled and favourite courses here.</div>
                            </div>
                                <div className = "shrink-0">
                                    <div className = "p-8" >
                                        <div className = "text-xl font-semibold w-full">
                                            Enrolled courses
                                        </div>
                                        <div className = "mb-4"> You haven't enrolled in any course.</div>
                                        <div className = "text-xl font-semibold w-full">
                                            Favourite courses
                                        </div>
                                        <div className = "text-base "> You have no favourite course.</div>
                                </div>
                            </div>
                            <div className = "ml-auto mt-auto justify-end bg-blue-100 w-full h-20 border-t border-gray-500 px-8 flex">
                                <button className="my-auto text-white px-4 py-2 border font-semibold border-blue-500 bg-blue-400 cursor-pointer hover:opacity-50">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(pageState == "account") {
            return(
                <div style = {{minHeight: "100vh",  width:"1000px"}} className = "m-auto my-5 h-full">
                    <div className = "border border-gray-500 bg-white flex flex-row box-content">
                        <div className = "shrink-0 border-r bg-sky-200 border-gray-500 py-8 w-60">
                            <Avatar
                                alt="Remy Sharp"
                                src="\android-chrome-512x512.png"
                                sx={{ width: 120, height: 120, margin: "auto" }}
                            />
                            <div className = "text-center mt-4 font-semibold text-xl truncate w-full px-2">RandomUsername123</div>
                            <div className = "text-center max-w-full mt-1 text-gray-500 text-sm w-full px-2">Joined: Dec 12, 2021</div>
                            <div className = "text-center max-w-full text-gray-500 text-sm w-full px-2">Last active 1 year ago</div>
                            <div>
                                <List className = {""}>
                                    <ListItem disablePadding>
                                        <Link className = "w-full" to = "/profile/edit-profile" onClick = {() => setPageState("profile")}>     
                                            <ListItemButton className = {"w-full justify-center"}>
                                                <ListItemText className = {"font-bold flex-grow-0"} primary="Profile" />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                <ListItem disablePadding>
                                    <Link className = "w-full" to = "/profile/courses" onClick = {() => setPageState("courses")}>                           
                                        <ListItemButton className = {"w-full justify-center"}>
                                            <ListItemText className = {"font-bold flex-grow-0"} primary="Courses" />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding sx ={{}}>
                                    <Link className = "w-full" to = "/profile/account" onClick = {() => setPageState("account")}>
                                        <ListItemButton className = {"w-full justify-center"}>
                                            <ListItemText className = {"font-bold flex-grow-0"} primary="Account" />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>                         
                                <ListItem disablePadding sx ={{}}>
                                    <ListItemButton className = {"w-full justify-center"}>
                                        <ListItemText className = {"text-center w-full text-red-600 font-bold"} primary="Log out" />
                                    </ListItemButton>
                                </ListItem>                         
                            </List>
                            </div>
                        </div>
                        <div className = "flex flex-col flex-grow">
                            <div className = "  bg-sky-100 border-b border-gray-500 p-8 text-center">
                                <div className = " font-semibold text-3xl">Your account</div>
                                <div className = " font-normal text-base">Change your password here.</div>
                            </div>                                <div className = "shrink-0 flex-grow">
                                    <div className = "p-8" >
                                    <div className = "text-xl font-semibold ">
                                        Change your password
                                    </div>
                                    <TextField fullWidth placeholder="Your current password" className = {"mt-4"} id="outlined-basic" label="Current password" variant="outlined" />
                                    <TextField fullWidth placeholder= "Your new password" className = {"mt-4"} id="outlined-basic" label="New password" variant="outlined" />
                                    {/* <TextField
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Bio (Optional)"
                                        placeholder="Tell us some things about yourself!"
                                        multiline
                                        rows={4}
                                        className = {"mt-4"}
                                    />
                                   <TextField
                                        fullWidth
                                        label="Facebook"
                                        id="outlined-start-adornment"
                                        sx={{ mt: 4}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">facebook.com/</InputAdornment>,
        
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Github"
                                        id="outlined-start-adornment"
                                        sx={{ my: 4}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">github.com/</InputAdornment>,
                                            
                                        }}
                                    /> */}
                                    </div>
                            </div>
                            <div className = "ml-auto justify-end bg-blue-100 w-full h-20 border-t border-gray-500 px-8 flex">
                                <button className=" my-auto text-white px-4 py-2 border font-semibold border-blue-500 bg-blue-400 cursor-pointer hover:opacity-50">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
