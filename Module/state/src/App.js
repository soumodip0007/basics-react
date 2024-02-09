import './App.css';
import React, {useState} from 'react';
import Heading from './Heading';

function App() {
  const [word, setWord] = React.useState('Eat');
  function handleClick() {
    setWord('Food');
  }

  return (
    <div className='App'>
       <Heading message={word + " at little Lemon"}/>
       <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App;
