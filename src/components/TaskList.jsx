import {useState} from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TaskList.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const addTask = task => {
        if(task.text.trim()) {
            task.text = task.text.trim();
            // const updatedTasks = [...tasks, task];
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    }
    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return(
        <>
            <TaskForm onSubmit={addTask} /> 
            <div className="task-list">
                {tasks.map((task) =>
                    <Task key={task.id} id={task.id} text={task.text} done={task.done} completeTask={completeTask} removeTask={removeTask} />
                )}
            </div>    
        </>
    );
}

export default TaskList;