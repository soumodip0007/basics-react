import { useState } from "react";

const Home = () => {
    //let name = 'pekka';
    const[name, setName] = useState('pekka');
    const[age, setAge] = useState(25);


    const handleClick = () => {
        // console.log('hello, developers');
        // name = 'vulk';
        // console.log(name)
        setName('vulk');
        setAge(30);
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello' + name, e.target);
    // }

    return ( 
       <div className="home">
         <h2>Hooks</h2>
         <p>{name} is {age} years old</p>
         <button onClick={handleClick}>Click Me</button>
         {/* <button onClick={(e)=>handleClickAgain('pekka', e)}>Click Me Again</button> */}
       </div> 
     );
}
 
export default Home;