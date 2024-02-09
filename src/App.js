
import Navbar from './Navbar';
//import Hooks from './hooks';
import Home from './Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Create from './Create';
import TaskDetails from './TaskDetails';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to the class';
  // const likes = 50;
  // const person = {name:'Pekka', age:'45'};
  // const link = "https://www.google.com/";

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <Hooks/> */}
        <Switch>
          <Route exact path="/"> 
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/tasks/:id">
            <TaskDetails/> 
          </Route>
          <Route path="*">
            <NotFound /> 
          </Route>
        </Switch>
      </div>
      {/* <div className="content"></div>
      <h1>{title}</h1>
      <p>Liked {likes} times</p> */}
      {/* <p>{person}</p> */}
      {/* <p>{10}</p>
    <p>{"hello! pekka"}</p>
    <p>{ [1,2,3,4,5] }</p>
    <p>{ Math.random() * 10 }</p> */}
    {/* <a href={link}>Hi I am Google😀</a> */}
    {/* <h1>App Component</h1> */}
    </div>
    </Router> 
  );
}

export default App;
