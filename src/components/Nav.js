import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";
import Logo from "../assets/logoHenry.png";

function Nav() {
  return (
    <>
      <nav className={styles.navBar}>
        <img className={styles.logoHenry} src={Logo} alt="Logo de Henry" />
        <p className={styles.appName}>Weather App - Henry</p>
        <NavLink to="/" className={styles.navLinks}>
          Home
        </NavLink>
        <NavLink to="/about" className={styles.navLinks}>
          About
        </NavLink>
        <NavLink to="/contact" className={styles.navLinks}>
          Contact
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
