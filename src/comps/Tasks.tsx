import { useState } from 'react';
import Stopwatch from "../comps/Stopwatch"

import Btn from "./Btn"

const Tasks = () => {
    const [tasks, setTasks] = useState<string[]>(["DSA", "Web Dev", "Monkeytype", "Video Editing", "Gaming"]);
    const [PlusButtonToggle, setPlusButtonToggle] = useState<boolean>(true);
    const [addTaskToggle, setAddTaskToggle] = useState<boolean>(false);
    const [addTask, setAddTask] = useState<string>("")
    const [showStopwatch, setShowStopwatch] = useState<boolean>(false);

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
        setShowStopwatch(true)
    }
    console.log(selectedTask);

    return (
        <div className='flex flex-col gap-5 w-[500px]'>
            <h2 className='text-3xl font-semibold'>Select Task</h2>
            {
                showStopwatch ?
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
                        <Stopwatch />
                    </div> :
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <div className='flex flex-wrap gap-2'>
                            {
                                tasks.sort().map((task, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelectTask(task)}
                                        className='border-1 border-zinc-500 px-5 py-2 rounded-lg hover:bg-zinc-900 transition-transform duration-200 hover:scale-105'
                                    >{task}</li>
                                ))
                            }
                        </div>
                        {
                            PlusButtonToggle &&
                            <Btn title='+' className='border-sky-500 text-sky-500' onClick={() => { setPlusButtonToggle(!PlusButtonToggle); setAddTaskToggle(true) }} />
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
                                    className='border-1 border-blue-400 text-blue-400'
                                />
                                <Btn
                                    title='Cancel'
                                    onClick={() => { setAddTaskToggle(false); setPlusButtonToggle(true) }}
                                    className='border-1 border-red-400 text-red-400'
                                />
                            </div>
                        }

                    </div>
            }

        </div >
    )
}

export default Tasks