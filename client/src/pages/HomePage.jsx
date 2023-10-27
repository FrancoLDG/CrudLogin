import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-8 text-black">Welcome to your To-Do List</h1>
            <Link to="/tasks" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Tasks</Link>
            <h3 className="text-2xl font-bold mb-8 text-black">What you can do?</h3>
            <br />
            <br />
            <h4 className="text-1xl font-bold mb-8 text-black">*You can add one "To Do" Task</h4>
            <h4 className="text-1xl font-bold mb-8 text-black">*You can edit one "To Do" Task</h4>
            <h4 className="text-1xl font-bold mb-8 text-black">*You can delete one "To Do" Task</h4>
            <h4 className="text-1xl font-bold mb-8 text-black">*You can view all "To Do" Task's you have</h4>
            <h4 className="text-1xl font-bold mb-8 text-black">*You can add category to filter tasks and keep the important more visible</h4>
            <h4 className="text-2xl font-bold mb-8 text-black"> AND THE IMPORTANT THING IS: NOBODY EXCEPT YOU CAN SEE YOUR TASK'S OR INTERACT WITH THEM</h4>
        </div>
    )
}

export default HomePage;