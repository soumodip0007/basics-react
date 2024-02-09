import { useState } from "react";
import { useHistory } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, topic, body, id };
        setIsPending(true);
        // console.log(task);
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() =>{
            console.log('new topic added');
            setIsPending(false);         
            // history.go(1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Topic</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) =>setTitle(e.target.value)}
                />
            
                 <label>Topic:</label>
                <input type="text"
                required
                value={topic}
                onChange={(e) =>setTopic(e.target.value)}
                />
                 <label>Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) =>setBody(e.target.value)}
                >
                </textarea>
                 <label>Id:</label>
                <input type="text"
                required
                value={id}
                onChange={(e) =>setId(e.target.value)}
                />
                <br />
                {!isPending && <button>Add Topic</button>}
                {isPending && <button disabled>Adding Topic...</button>}
            </form>
        </div>
     );
}
 
export default Create;