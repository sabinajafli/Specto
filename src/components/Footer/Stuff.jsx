import React from 'react'
import styles from './Footer.module.css'

function Stuff() {
  return (
    <div className={styles.footerItem}>
        <h6>Legal stuff</h6>
        <ul>
            <li>FAQs</li>
            <li>Give us feedback</li>
            <li>COntact us</li>
        </ul>
    </div>
  )
}

export default Stuff