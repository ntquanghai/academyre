import React from "react";
import { Text } from "react";


export const NotFound = () => {
    return(
        <div className = "">
            <div className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className = "font-bold text-center" style = {{fontSize:"160px"}}>
                    404
                </div>
                <div className = "font-semibold text-4xl text-center">
                    We can't find the page you're looking for
                </div>
                <div className = "text-center text-xl">
                    If you believe this was an error, please contact us via <b className ="ml-1"> academyre.support@gmail.com</b>
                </div>
            </div>
        </div>
    )
}