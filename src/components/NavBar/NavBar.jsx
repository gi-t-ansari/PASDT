import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { APP_URL } from "../../config";

function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link to={`${APP_URL.HOMEPAGE}`}>
          <img className={styles.logo} src={logo} alt="nasa-logo" />
        </Link>
      </div>
      <ul className={styles.listContainer}>
        <li className={styles.navList}>
          <Link to={`${APP_URL.COORDINATE_ONE}`}>Coordinate One</Link>
        </li>
        <li className={styles.navList}>
          <Link to={`${APP_URL.COORDINATE_TWO}`}>Coordinate Two</Link>
        </li>
        <li className={styles.navList}>
          <Link to={`${APP_URL.COORDINATE_THREE}`}>Coordinate Three</Link>
        </li>
        <li className={styles.navList}>
          <Link to={`${APP_URL.COORDINATE_FOUR}`}>Coordinate Four</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
