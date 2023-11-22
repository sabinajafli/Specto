import React from 'react'
import styles from './Footer.module.css'
import GetInTouch from './GetInTouch'
import About from './About'
import Stuff from './Stuff'
import Connect  from './Connect'

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footer}>
            <GetInTouch />
            <About />
            <Stuff />
            <Connect />
        </div>
        <p>2020 © Specto.&nbsp; All rights reserved.</p>
    </div>
  )
}

export default Footer