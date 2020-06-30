import React from 'react'
import styles from './containerCard.module.scss'

const ContainerCard = (props: any) => {
  const { children } = props
  return <div className={styles.containerCard}>{children}</div>
}

export default ContainerCard
