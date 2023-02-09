//import { useState, useEffect } from "react";//hooks
import TaskList from "./taskList";
import useFetch from "./useFetch";

const Home = () => {
    // const [tasks, setTasks] = useState([
    //     { title: 'learn html', body: 'task', assignedBy: 'faculty - Jhon', id: '1' },
    //     { title: 'learn css', body: 'task', assignedBy: 'faculty - Kevin', id: '2' },
    //     { title: 'learn js', body: 'task', assignedBy: 'faculty - Joseph', id: '3' }
    // ]);

    // const [isPending, setIsPending] = useState(true);

    // const [tasks, setTasks] = useState(null);

    // const [error, setError] = useState(null);

    // const [name, setName] = useState('faculty - Joseph')

    const {data: tasks, isPending, error} = useFetch('http://localhost:8000/tasks')

    // const handleDelete = (id) => {
    //     const newTasks = tasks.filter(task => task.id !== id);
    //     setTasks(newTasks);
    // }

    // useEffect(() => {
    //     // console.log('use effect hook');
    //     // console.log(tasks);
    //     // console.log(name);
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/tasks')
    //             .then(res => {
    //                 console.log(res); //We can get the response
    //                 if (!res.ok) {
    //                     throw Error('Could not fetch the data from resource');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log(data);
    //                 setTasks(data);
    //                 setIsPending(false);
    //                 setError(null);
    //             })
    //             .catch(err => {   //For finding any error
    //                 // console.log(err.message); 
    //                  setIsPending(false);
    //                  setError(err.message);
    //             })
    //     }, 2000); //Loading Message
    // }, []); //this function will run in every render



    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* map method */}
            {isPending && <div>Loading...</div>}
            {tasks && <TaskList tasks={tasks} title="All Properties" />} 
            {/* <TaskList tasks={tasks.filter((task) => task.assignedBy === 'faculty - Joseph')} title="JavaScript Tasks"/>  */}
            {/* <button onClick={() => setName('faculty - Kevin')}>Change Name</button> */}
            {/* <p>{ name }</p> */}
        </div>
    );
}

export default Home;

// handleDelete={handleDelete} 