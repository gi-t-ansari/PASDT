import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="nasa-logo" />
        </Link>
      </div>
      <ul className={styles.listContainer}>
        <li className={styles.navList}>
          <Link to="/img1">Coordinate One</Link>
        </li>
        <li className={styles.navList}>
          <Link to="/img2">Coordinate Two</Link>
        </li>
        <li className={styles.navList}>
          <Link to="/img3">Coordinate Three</Link>
        </li>
        <li className={styles.navList}>
          <Link to="/img4">Coordinate Four</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
