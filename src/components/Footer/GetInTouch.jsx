import React from 'react'
import styles from './Footer.module.css'

function GetInTouch() {
  return (
    <div className={styles.footerItem}>
        <h6>Get in touch</h6>
        <ul>
            <li>FAQs</li>
            <li>Give us feedback</li>
            <li>COntact us</li>
        </ul>
    </div>
  )
}

export default GetInTouch