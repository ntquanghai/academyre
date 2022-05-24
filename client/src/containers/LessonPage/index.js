import React, {useState, useEffect, Fragment} from "react";
import Header from "../../layouts/Header";
import LessonAccordion from "../../components/LessonAccordion";
import ReactPlayer from 'react-player/lazy'
import { useSelector } from "react-redux";


export const LessonPage = (props) => {
    const [progress, setProgress] = useState()

    const { todos } = useSelector((state) => state.todo);

    console.log(todos)

    return(
        <div className="flex flex-col" style = {{minHeight:"100vh"}}>
            <div className="">
                <div className = "p-4 mb-8 text-2xl bg-black text-white"><b>Programming Languages {">"} </b> Advanced Java</div>
            </div>
            <div className="w-3/4 mx-auto">
                <div className = "flex flex-row">
                    <div className = "flex-grow h-full w-full flex flex-col">
                        <ReactPlayer controls width = "100%" height="600px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        <div>
                            <div className = "text-xl py-4">
                                <div className = "text-xl mb-4">
                                    <b>Lesson 1:</b> {todos[0].name}
                                </div>
                                <div className="mb-4">
                                    <b>Lesson Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </div>
                                <div>
                                    <b>Course Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </div>
                            </div>
                        </div>                
                    </div>
                    <div className = "ml-4" style = {{width:"500px", zIndex:"1"}}>
                        <div  className = "p-4 font-bold text-xl">Course navigator</div>
                        {todos &&
                            todos.map((data) => {
                                return(
                                    <LessonAccordion
                                        key = {data.id}
                                        todo = {data}
                                    ></LessonAccordion>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
    </div>    
    )
}