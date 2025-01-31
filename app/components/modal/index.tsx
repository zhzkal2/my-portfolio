import { ModalProps } from '../../utils/interfaces'
import { MouseEvent } from 'react'
import styles from './modal.module.scss'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Modal({ closeModal }: ModalProps) {
  const handleInnerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div
      className={`${styles['modal']} ${inter.className}`}
    >
      <div
        className={`${styles['modal-content']} ${styles['modal-about']}`}
        onClick={(e) => handleInnerClick(e)}
      >
        <div className={styles['modal-header']}>
          <button onClick={() => closeModal()} title="Close Modal"></button>
          <button className={styles['yellow-btn']} title="Dummy Button"></button>
          <button className={styles['green-btn']} title="Dummy Button"></button>
        </div>
        <div className={styles['modal-body']}>
          {/* <div>{children}</div> */}
        </div>
      </div>
    </div>
  )
}
