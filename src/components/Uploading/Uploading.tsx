import React from 'react'
import styles from './uploading.module.scss'

type Props = {
  title: string
  sizeOfFile: number
  amountUploaded: number
}
const Uploading = (props: Props) => {
  const { title, sizeOfFile, amountUploaded } = props
  const percentageOfFileUploaded = (amountUploaded / sizeOfFile) * 100
  const amountLeftToUpload = sizeOfFile - amountUploaded

  return (
    <div className={styles.uploadingContainer}>
      <p className={styles.uploadingTitle}>{title}</p>
      <p className={styles.amountLeftToUpload}>{amountLeftToUpload}MB left</p>
      <div className={styles.barContainer}>
        <span
          className={styles.amountUploadedMeter}
          style={{ width: `${percentageOfFileUploaded}%` }}
        ></span>
        <span className={styles.uploadedMeter}></span>
      </div>
    </div>
  )
}

export default Uploading
