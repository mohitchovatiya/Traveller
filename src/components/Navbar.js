import classes from './Navbar.module.css';
import { Link } from "react-router-dom";


const Navbar = props => {
    return <div className={classes.navbar}>
        <ul>
            {/* <li><img src='./travel-logo.png'></img></li> */}
            <li><Link style={{color:'rgb(153, 161, 155)'}} to='/home'>Home</Link></li>
            <li><Link to='/tours'>Tours</Link></li>
            {/* <li><Link to='/offers'>Offers</Link></li> */}
            <li><Link to='/aboutus'>About</Link></li>

        </ul>
        <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
        </ul>
    </div>
}

export default Navbar;