import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div>
      <h2>Meetups</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
