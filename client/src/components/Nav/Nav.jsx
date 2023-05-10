import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/home" className={styles.link}>
        Home
      </Link>
      <Link to="/create" className={styles.link}>
        Form
      </Link>
    </div>
  );
};

export default Nav;
