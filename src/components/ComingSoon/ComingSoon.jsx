import React from 'react'
import Info from './Info'
import styles from './ComingSoon.module.css'

function ComingSoon() {
  return (
    <section className={styles.comingSoon}>
        <h2>Coming Soon</h2>
        <Info />
    </section>
  )
}

export default ComingSoon