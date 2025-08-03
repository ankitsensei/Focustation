import { useState } from 'react';
import Btn from "./Btn"

const Tasks = () => {
    const [tasks, setTasks] = useState<string[]>(["DSA", "Web Dev"]);
    const [PlusButtonToggle, setPlusButtonToggle] = useState<boolean>(true);
    const [addTaskToggle, setAddTaskToggle] = useState<boolean>(false);
    const [addTask, setAddTask] = useState<string>("")


    const handleTaskAdd = (newTask:string) => {
        if (newTask.trim().length){
            setTasks([...tasks, newTask])
        }
        setAddTaskToggle(false)
        setPlusButtonToggle(true)
        setAddTask("")
    }

    return (
        <div className='flex flex-col gap-5 w-96'>
            <h2 className='text-3xl font-semibold'>Select Task</h2>
            <div className='flex gap-5'>
                {
                    tasks.map((task, index) => (
                        <li
                            key={index}
                            className='border-1 border-zinc-500 px-5 py-2 rounded-lg hover:bg-zinc-900'
                        >{task}</li>
                    ))
                }
            </div>
            {
                PlusButtonToggle &&
                <Btn title='+' className='border-sky-500 text-sky-500' onClick={() => {setPlusButtonToggle(!PlusButtonToggle); setAddTaskToggle(true)}} />
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
                            className='border-1 border-zinc-500'
                        />
                    </div>
            }
        </div>
    )
}

export default Tasks