import React from 'react'
import styles from './usageMeter.module.scss'

type Props = {
  title: string
  usedStorage: number
  totalStorage: number
}

const UsageMeter = (props: Props) => {
  const { title, usedStorage, totalStorage } = props
  const percentageOfStorageUsed = (usedStorage / totalStorage) * 100
  return (
    <div className={styles.usageMeterContainer}>
      <h3>{title}</h3>
      <div className={styles.barContainer}>
        <p className={styles.usedStorage}>{usedStorage}GB</p>
        <span
          className={styles.usedStorageMeter}
          style={{ width: `${percentageOfStorageUsed}%` }}
        ></span>
        <span className={styles.storageMeter}></span>
        <p className={styles.remainingStorage}>{totalStorage}GB</p>
      </div>
    </div>
  )
}

export default UsageMeter
