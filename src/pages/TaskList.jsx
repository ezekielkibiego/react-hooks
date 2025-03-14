import { useMemo, useState } from "react";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([
       { id: 1, name: "Learn React Hooks", completed: false},
       { id: 2, name: "Learn Optimization", completed: false},
       { id: 3, name: "Learn React Testing with Jest", completed: false},
    ]);

    const [showCompleted, setShowCompleted] = useState(false);
    
    const filteredTasks = useMemo(() => {
        console.log('Filtering tasks...');
        return tasks.filter(task => showCompleted || !task.completed);

    }, [tasks, showCompleted])

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed} : task
        ));
    };
    return (
        <div>
            <button onClick={() => setShowCompleted(!showCompleted)}>
                Toggle Completed
            </button>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>

            {tasks.map(task => (
                <Task key={task.id} task={task} toggleComplete={toggleComplete}/>
            ))}

        </div>
    )

}


export default TaskList;