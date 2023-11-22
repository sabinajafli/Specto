import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
        <ul className={styles.navbar}>
            <li className={styles.active}>HOME</li>
            <li>WHAT'S ON</li>
            <li>NEWS</li>
            <li>SHORTCODES</li>
            <li>CONTACT US</li>
        </ul>
    </nav>
  )
}

export default Navbar