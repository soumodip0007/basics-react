import TaskList from "./taskList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: tasks, isPending, error} = useFetch('http://localhost:8000/tasks')
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* map method */}
            {isPending && <div>Loading...</div>}
            {tasks && <TaskList tasks={tasks} title="All Properties" />}
        </div>
    );
}

export default Home;