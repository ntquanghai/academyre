import Box from "@mui/material/Box";
import * as React from "react";

export const HeaderCategoryBar = (props) => {
    return(
        <div className = "w-full items-center flex flex-row justify-center shadow-lg py-4">
            <div className = "px-4">
                Programming Languages
            </div>
            <div className = "px-4">
                Engineering
            </div>
            <div className = "px-4">
                Mathematics
            </div>
            <div className = "px-4">
                Software Engineering
            </div>
            <div className = "px-4">
                Game Development
            </div>
            <div className = "px-4">
                Web Development
            </div>
        </div>
    )
}