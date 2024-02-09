import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import "./index.css";

function App() {
  // return <Header/>
  return (
    <div className="App">
      <Header/>
      <div>
      <Main userName="Mack" num={5}/>
      <Sidebar/>
      </div>
    </div>
  )
}

export default App;
