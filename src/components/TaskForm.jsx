import {useState} from 'react';
import '../stylesheets/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm({onSubmit}) {
    const [input, setInput] = useState('');

    const handelChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = {
            'id': uuidv4(),
            'text': input,
            'done': false
        }

        onSubmit(newTask);
        setInput('');
    }

    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <input className="task-input" type="text" name="task-name" placeholder="Type a Task..." onChange={handelChange} value={input} />
            <button className="task-btn">Add Task</button>
        </form>
    );
}

export default TaskForm;