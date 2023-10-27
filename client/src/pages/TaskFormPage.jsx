import {useForm} from 'react-hook-form';
import { useTask } from '../context/TasksContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';


function TaskFormPage(){
    const {register, handleSubmit, setValue} = useForm();
    const {createTask, getTask, updateTask} = useTask();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask(){
            if(params.id){
                {
                    const task = await getTask(params.id);
                    setValue('title', task.title)
                    setValue('description', task.description)
                }
                }
        }
        loadTask()
    }, []);   
    

    const onSubmit = handleSubmit((data) =>{
        if (params.id) {
            updateTask(params.id, data);    
        } else {
            createTask(data);
            
        }
        navigate('/tasks');
    })

    return(
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <form onSubmit ={onSubmit}>
                <input type="text" placeholder="Title" 
                {...register ('title')}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />
                <textarea rows="3" placeholder="Description"
                {...register ('description')}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                ></textarea>
                <input type="text" placeholder="Category" 
                {...register ('category')}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                list="category-options"
                />
                <datalist id="category-options">
                    <option value="hobby" />
                    <option value="work" />
                    <option value="task" />
                </datalist>
                <button>Save</button>
            </form>
        </div>
    )
}

export default TaskFormPage;

