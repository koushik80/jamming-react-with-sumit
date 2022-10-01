import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "teal"}}>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={{fontWeight: "bold", color: "teal"}}>About</NavLink>
        </li>
        <li>
          <NavLink exact to="/services" activeStyle={{fontWeight: "bold", color: "teal"}}>Services</NavLink>
        </li>
        <li>
          <NavLink exact to="/dashboard" activeStyle={{fontWeight: "bold", color: "teal"}}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink exact to="/posts/js" activeStyle={{fontWeight: "bold", color: "teal"}}>JavaScript</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;