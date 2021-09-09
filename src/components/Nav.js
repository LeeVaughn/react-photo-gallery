import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/puppies">Puppies</NavLink></li>
        <li><NavLink to="/kittens">Kittens</NavLink></li>
        <li><NavLink to="/surfing">Surfing</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
