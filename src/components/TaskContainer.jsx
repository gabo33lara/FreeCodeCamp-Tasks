import '../stylesheets/TaskContainer.css';
import TaskList from './TaskList';

function TaskContainer() {
    return(
        <div className="task-list-container">
            <h1>Task List</h1>
            <TaskList /> 
        </div>
    );
}

export default TaskContainer;