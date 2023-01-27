import '../stylesheets/Task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function Task({id, text, done, completeTask, removeTask}) {
    return(
        <div className={done ? 'task-container done' : 'task-container'}>
            <div className="task-text" onDoubleClick={() => completeTask(id)}>
               {text}
            </div>
            <div className="task-icon" onClick={() => removeTask(id)}>
                <AiOutlineCloseCircle />
            </div>
        </div>
    );
}

export default Task;