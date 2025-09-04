import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// import Stopwatch from "../comps/Stopwatch"

import Btn from "./Btn"

const Tasks = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState<string[]>(["DSA", "Web Dev", "Monkeytype", "Video Editing", "Gaming"]);
    // const [timeSpent, setTimeSpent] = useState<string[]>([60, 120, 5, 30, 60]);
    const [PlusButtonToggle, setPlusButtonToggle] = useState<boolean>(true);
    const [addTaskToggle, setAddTaskToggle] = useState<boolean>(false);
    const [addTask, setAddTask] = useState<string>("");

    const [selectedTask, setSelectedTask] = useState<string | null>(null);



    const handleTaskAdd = (newTask: string) => {
        if (newTask.trim().length) {
            setTasks([...tasks, newTask])
        }
        setAddTaskToggle(false)
        setPlusButtonToggle(true)
        setAddTask("")
    }

    const handleSelectTask = (task: string) => {
        setSelectedTask(task);
        navigate("/stopwatch", { state: { task } });
    }
    console.log(selectedTask);

    return (
        <div className='flex flex-col gap-5 w-[500px]'>
            <h2 className='text-3xl font-semibold'>Select Task</h2>
            {
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='flex flex-wrap gap-2'>
                        {
                            tasks.sort().map((task, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelectTask(task)}
                                    className='border-1 border-zinc-500 px-5 py-2 rounded-lg hover:bg-pink-800 transition-transform duration-200 hover:scale-105'
                                >{task}</li>
                            ))
                        }
                    </div>
                    {
                        PlusButtonToggle &&
                        <Btn title='+' className='border-1 border-sky-500 text-sky-500 bg-sky-900' onClick={() => { setPlusButtonToggle(!PlusButtonToggle); setAddTaskToggle(true) }} />
                    }
                    {
                        addTaskToggle &&
                        <div className='flex gap-2'>

                            <input
                                type="text"
                                value={addTask}
                                onChange={(e) => setAddTask(e.target.value)}
                                className='border-1 border-zinc-500 outline-none px-2 py-2 rounded-lg'
                            />
                            <Btn
                                title='Add'
                                onClick={() => handleTaskAdd(addTask)}
                                className='border-1 border-blue-400 text-blue-400 bg-blue-900'
                            />
                            <Btn
                                title='Cancel'
                                onClick={() => { setAddTaskToggle(false); setPlusButtonToggle(true) }}
                                className='border-1 border-red-00 text-red-400 bg-red-900'
                            />
                        </div>
                    }

                </div>
            }

        </div >
    )
}

export default Tasks