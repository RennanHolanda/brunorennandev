import styles from "./Navbar.module.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dev from "/img/dev.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={Dev} alt="Logo" />
      </Link>
      <ul
        className={isMobile ? styles.nav_links_mobile : styles.nav_links}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className={styles.home}>
          <li>HOME</li>
        </Link>
        <Link to="/about" className={styles.about}>
          <li>SOBRE MIM</li>
        </Link>
        <Link to="/myprojects" className={styles.projects}>
          <li>PROJETOS</li>
        </Link>
        <Link to="/contact" className={styles.contact}>
          <li>CONTATO</li>
        </Link>
      </ul>
      <button
        className={styles.mobile_menu_icon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
