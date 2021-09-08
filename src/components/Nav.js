import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/search/puppies">Puppies</NavLink></li>
        <li><NavLink to="/search/kittens">Kittens</NavLink></li>
        <li><NavLink to="/search/surfing">Surfing</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
