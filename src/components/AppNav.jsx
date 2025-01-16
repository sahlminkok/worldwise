import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/app">App</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
