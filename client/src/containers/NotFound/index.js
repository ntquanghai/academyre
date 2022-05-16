import React from "react";
import { Text } from "react";


export const NotFound = () => {
    return(
        <div className = "flex-grow flex h-screen">
            <div className = "m-auto">
                <div className = "font-bold text-center" style = {{fontSize:"120px"}}>
                    404
                </div>
                <div className = "font-semibold text-4xl text-center">
                    We can't find the page you're looking for
                </div>
                <div className = "text-center text-xl flex flex-row">
                    If you believe this was an error, please contact us via <b className ="ml-1"> academyre.support@gmail.com</b>
                </div>
            </div>
        </div>
    )
}