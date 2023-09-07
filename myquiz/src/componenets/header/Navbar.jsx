import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom"

import styles from './Navbar.module.css'
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav>
        <Link to="/" className={styles.Home}>Website</Link>
        
        <div  className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>

        </div>
        <ul className={menuOpen ? styles.open : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contect">Contect US</NavLink></li>

        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar
