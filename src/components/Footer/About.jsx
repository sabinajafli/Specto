import React from 'react'
import styles from './Footer.module.css'

function About() {
  return (
    <div className={styles.footerItem}>
        <h6>About movie star</h6>
        <ul>
            <li>FAQs</li>
            <li>Give us feedback</li>
            <li>COntact us</li>
        </ul>
    </div>
  )
}

export default About