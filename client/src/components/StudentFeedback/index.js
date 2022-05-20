import React from "react";
import { Avatar } from "@mui/material";
import { Rating } from "@mui/material";
import ReadOnlyRating from "../../components/Rating";


export const StudentFeedback = (props) => {
    return(
        <div className="py-4" style = {{width:props.width}}>
            <div className = "flex flex-row">
                <div className = "pr-3">
                    <Avatar sx={{ bgcolor: "gray" }}>N</Avatar>
                </div>
                <div className="flex flex-col">
                    <div className = "text-lg font-bold">
                        Username Random
                    </div>
                    <div className="flex flex-row mb-1">
                        <Rating name="read-only" size="small" value={3} readOnly />
                        <div className = "text-sm font-gray-400 ml-2">
                            2 weeks ago
                        </div>
                    </div>
                    <div>
                    Curabitur ut est laoreet, dapibus eros et, viverra turpis. Suspendisse nibh velit, ultrices a felis finibus, sollicitudin placerat elit. Vivamus massa enim, laoreet sed posuere in, rhoncus ac nulla. Cras tincidunt eget metus quis iaculis. Aliquam eu massa at lorem viverra dictum id quis purus. Duis sed est id nunc blandit interdum sit amet quis dui. Quisque non arcu nisi. Morbi sed laoreet enim.
                    </div>
                </div>
            </div>
        </div>
    )
}