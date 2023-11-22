import React from 'react'
import styles from './New.module.css'
import Newimages from './Newimages'

function New() {
  return (
    <div className={styles.container}>
        <h2>New in</h2>
        <Newimages />
    </div>
  )
}

export default New