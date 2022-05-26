import Box from "@mui/material/Box";
import * as React from "react";

export const HeaderCategoryBar = (props) => {
    return(
        <div className = "w-full items-center flex flex-row justify-center shadow-lg py-4">
            <a href = "/category/programming-languages" className = "px-4 hover:text-amber-400">
                Programming Languages
            </a>
            <a href = "/category/engineering" className = "px-4 hover:text-amber-400">
                Engineering
            </a>
            <a href = "/category/mathematics" className = "px-4 hover:text-amber-400">
                Mathematics
            </a>
            <a href = "/category/software-engineering" className = "px-4 hover:text-amber-400">
                Software Engineering
            </a>
            <a href = "/category/game-development" className = "px-4 hover:text-amber-400">
                Game Development
            </a>
            <a href = "/category/web-development" className = "px-4 hover:text-amber-400">
                Web Development
            </a>
        </div>
    )
}