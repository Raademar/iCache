import React from 'react'
import styles from './sidebar.module.scss'
import ContainerCard from '../ContainerCard/ContainerCard'
import UserIcon from '../Svgs/UserIcon'
import UsersIcon from '../Svgs/UsersIcon'
import MenuIcon from '../Svgs/MenuIcon'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ContainerCard>
        <div className={styles.userInfo}>
          <span className={styles.infoRow}>
            <div>
              <UserIcon />
              <p>Bagofskates</p>
            </div>
            <MenuIcon fill="#f4f6f8" />
          </span>
          <span className={styles.infoRow}>
            <div>
              <UsersIcon />
              <p>Swapsie</p>
            </div>
            <MenuIcon fill="#f4f6f8" />
          </span>
        </div>
      </ContainerCard>
      <ContainerCard>Usage</ContainerCard>
      <ContainerCard>Upload</ContainerCard>
      <ContainerCard>Boost</ContainerCard>
    </div>
  )
}

export default Sidebar
