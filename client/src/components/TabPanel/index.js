import * as React from "react";
import {useState, useEffect, Fragment} from "react";

export const TabPanel = () => { 
    const [value,setValue] = useState("Most popular")

    const handleChange = (data) => {
        setValue(data)
    }
    return(
        <div className="my-4 h-10 w-full" style = {{boxShadow:"inset 0 -1px 0px 0px #d1d7dc"}}>
            <div className="h-full">
                {value == "Most popular"
                    ?
                    <div className = "h-full inline-block border-b-2 border-black mr-4">
                        <button className="text-lg font-semibold ">
                            Most popular
                        </button>
                    </div>
                    :
                    <div className = "h-full inline-block">
                        <button className="text-lg font-semibold hover:text-black text-gray-500 mr-4" onClick = {()=>handleChange("Most popular")}>
                            Most popular
                        </button>
                    </div>
                }
                {value == "What's new"
                    ?
                    <div className = "h-full inline-block border-b-2 border-black mr-4">
                        <button className="text-lg font-semibold">
                            What's new
                        </button>
                    </div>
                    :
                    <div className = "h-full inline-block">
                        <button className="text-lg font-semibold hover:text-black text-gray-500 mr-4" onClick = {()=>handleChange("What's new")}>
                            What's new
                        </button>
                    </div>
                }
                {value == "Highest Rated"
                    ?
                    <div className = "h-full inline-block border-b-2 border-black mr-4">
                        <button className="text-lg font-semibold">
                        Highest Rated
                        </button>
                    </div>
                    :
                    <div className = "h-full inline-block">
                        <button className="text-lg font-semibold hover:text-black text-gray-500 mr-4" onClick = {()=>handleChange("Highest Rated")}>
                            Highest Rated
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}