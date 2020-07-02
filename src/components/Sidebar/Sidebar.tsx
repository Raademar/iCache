import React from 'react'
import { Link } from 'react-router-dom'
import styles from './sidebar.module.scss'
import ContainerCard from '../ContainerCard/ContainerCard'
import UsageMeter from '../UsageMeter/UsageMeter'
import Uploading from '../Uploading/Uploading'
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
              <Link to="/">
                <p>Bagofskates</p>
              </Link>
            </div>
            <MenuIcon fill="#f4f6f8" />
          </span>
          <span className={styles.infoRow}>
            <div>
              <UsersIcon />
              <Link to="/">
                <p>Swapsie</p>
              </Link>
            </div>
            <MenuIcon fill="#f4f6f8" />
          </span>
        </div>
      </ContainerCard>
      <ContainerCard>
        <div className={styles.usageInfo}>
          <h2>Usage</h2>
          <UsageMeter title="Personal" usedStorage={45} totalStorage={100} />
          <UsageMeter title="Work" usedStorage={10} totalStorage={50} />
          <UsageMeter title="Project" usedStorage={35} totalStorage={50} />
        </div>
      </ContainerCard>
      <ContainerCard>
        <div className={styles.uploadingInfo}>
          <h2>Uploading</h2>
          <span className={styles.cancelUploadButton}>CANCEL</span>
          <Uploading
            title="MOV2020_06_05_Suavemente.mov"
            sizeOfFile={700}
            amountUploaded={528}
          />
        </div>
      </ContainerCard>
      <ContainerCard>Boost</ContainerCard>
    </div>
  )
}

export default Sidebar
