import React from 'react'
import styles from './foldercard.module.scss'
import MenuIcon from '../Svgs/MenuIcon'
import FolderIcon from '../Svgs/FolderIcon'
const Foldercard = (props: any) => {
  const { children, selectedFolderCard } = props
  return (
    <div
      className={
        selectedFolderCard ? styles.selectedFolderCard : styles.folderCard
      }
    >
      {props.menuIcon && (
        <MenuIcon
          className={styles.menuIcon}
          style={{ position: 'absolute', top: 16, right: 24 }}
          fill="#f4f6f8"
        />
      )}
      {props.folderIcon && (
        <FolderIcon
          className={styles.folderIcon}
          style={{ position: 'absolute', top: 16, left: 24 }}
          fill={selectedFolderCard ? '#f4f6f8' : '#3d72dd'}
        />
      )}
      <div className={styles.folderInfo}>
        <span className={styles.folderCardTitle}>Personal</span>
        <span className={styles.folderCardStorageAmount}>10GB</span>
      </div>
      {children}
    </div>
  )
}

export default Foldercard
