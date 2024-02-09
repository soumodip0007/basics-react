import {Link} from 'react-router-dom';

//sfc then enter tab to get the snippet
const Navbar = () => {     
    return ( 
        <nav className="navbar">
            <h1>Web Dev Properties</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor:'#0079BF',
                    borderRadius:'8px'
                }}>Add a new topic</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
