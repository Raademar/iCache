import React from 'react'
import styles from './sidebar.module.scss'
import ContainerCard from '../ContainerCard/ContainerCard'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ContainerCard>
        <p>Bagofskates</p>
        <p>Swapsie</p>
      </ContainerCard>
      <ContainerCard>Usage</ContainerCard>
      <ContainerCard>Upload</ContainerCard>
      <ContainerCard>Boost</ContainerCard>
    </div>
  )
}

export default Sidebar
