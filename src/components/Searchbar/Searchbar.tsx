import React from 'react'
import styles from './searchbar.module.scss'

const Searchbar = () => {
  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbarField}>
        <input type="text" placeholder="Search your files" />
      </div>
    </div>
  )
}

export default Searchbar
