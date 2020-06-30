import React from 'react'
import styles from './mainpanel.module.scss'
import ContainerCard from '../ContainerCard/ContainerCard'
import Searchbar from '../Searchbar/Searchbar'
import FolderCard from '../FolderCard/FolderCard'
import MenuIcon from '../Svgs/MenuIcon'
import FolderIcon from '../Svgs/FolderIcon'

const MainPanel = () => {
  return (
    <div className={styles.mainpanel}>
      <ContainerCard>
        <Searchbar />
        <div className={styles.folderCardHolder}>
          <FolderCard selectedFolderCard menuIcon folderIcon />
          <FolderCard menuIcon folderIcon />
          <FolderCard menuIcon folderIcon />
        </div>
      </ContainerCard>
    </div>
  )
}

export default MainPanel
