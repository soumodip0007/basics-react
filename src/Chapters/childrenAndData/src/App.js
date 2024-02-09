import './App.css';
import Child from './child';
function App() {
  const date = new Date()
  return (
    <div>
      <Child message={date.toLocaleTimeString()}/>
    </div>
  )
}

export default App;
