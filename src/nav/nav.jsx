import { NavLink } from 'react-router';


export default function NavBar(){
    return (<nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>

    </nav>)
}