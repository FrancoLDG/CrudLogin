import { useAuth } from "../context/AuthContext";
import { useTask } from "../context/TasksContext";    
import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

function TasksPage(){
    const {getTasks, tasks} = useTask();
    const [category, setCategory] = useState("all");
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        if (category === "all") {
            setFilteredTasks(tasks);
        } else {
            setFilteredTasks(tasks.filter(task => task.category === category));
        }
    }, [category, tasks]);

    useEffect(() => {
        getTasks();
    }, []);

    if (tasks.length === 0) return <h1>No tasks</h1>
    
    return(
        <div>
            <div className="w-full max-w-md my-2 px-2">
                <label htmlFor="category" className="my-2 py-2">Filter by category:</label>
                <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="my-2 px-2">
                    <option value="all" className="bg-sky-500">All</option>
                    <option value="work" className="bg-sky-500">Work</option>
                    <option value="hobby" className="bg-sky-500">Hobby</option>
                    <option value="task" className="bg-sky-500">Task</option>
                </select>
            </div>
            <div className="grid sm:grid-coils-2 md:grid-cols-3 gap-2">
                {filteredTasks.map(task => (
                  <TaskCard task={task} key={task._id}  />
                ))}
            </div>
        </div>
    )
}

export default TasksPage;