import { Link } from "react-router-dom";
import classes from "./MainNav.module.scss";

function MainNav() {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Meetups</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
