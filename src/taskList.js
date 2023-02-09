import { Link } from "react-router-dom";

const TaskList = ({tasks, title, handleDelete}) => {       //using props
    // const tasks = props.tasks
    // const title = props.title;

    return ( 
        <div className="task-list">
            <h2>{title}</h2>
             {tasks.map((task) => (
             <div className="task-preview" key={tasks.id}>
               <Link to={`/tasks/${task.id}`}>
                <h2>{task.title}</h2>
                <p>Click to see details {task.assignedBy}</p>
                </Link>
                {/* <button onClick ={() => handleDelete(task.id)}>Delete Tasks</button> */}
             </div>
           ))}
        </div>
     );
}
 
export default TaskList;