import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import nav from "../../assets/img/nav.png";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo} src={nav} alt="" />
        </Link>
        <Link to="/home" className={styles.link}>
          Home
        </Link>
        <Link to="/create" className={styles.link}>
          Form
        </Link>
      </div>
    </div>
  );
};

export default Nav;
