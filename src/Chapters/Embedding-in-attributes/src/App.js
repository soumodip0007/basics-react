import './App.css';
import builder from './builder.png';

function Logo(props) {
  const userPic = <img src={builder} alt='Builder'/>;
  return userPic;
}

function App() {
  return (
    <div>
      <h1>Hello, World</h1>
      <Logo/>
    </div>
  )
}

export default App;
