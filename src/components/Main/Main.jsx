import React from 'react'
import Title from './Title'
import Button from './Button'
import styles from './Main.module.css'

function Main() {
  return (
    <div className={styles.main}> 
        <Title />
        <Button />
        <img src="../src/assets/scroll-arrow.svg" alt="" className={styles.scrollImg}/>
    </div>
  )
}

export default Main