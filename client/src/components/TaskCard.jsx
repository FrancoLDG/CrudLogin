import React from "react";
import ToggleButton from "./ToggleButton";
import {useTask} from "../context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({task}) {

    const {deleteTask} = useTask();
    return(
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold py-1 px-2">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-1 py-1 rounded-md" onClick={()=>{
                        deleteTask(task._id);
                    }}>delete</button>
                    <Link to={`/tasks/${task._id}`} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md">edit</Link>
                    <ToggleButton/>
                </div>
            </header>
            <p className="text-slate-300 py-1 px-3">{task.description}</p>
            <p className="text-slate-300 py-1 px-3">{"Category: " + task.category}</p>
        </div>
    )
}
export default TaskCard;