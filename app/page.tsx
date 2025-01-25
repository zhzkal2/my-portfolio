'use client'

import { useState } from 'react'
import DesktopIcon from './components/desktop-icon'
import Dock from './components/dock'
import Modal from './components/modal'
import Navbar from './components/navbar'
import styles from './components/modal/modal.module.scss'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <main>
      <h1 style={{ display: 'none' }}></h1>
      <Navbar />
      <section>
        {/* <DesktopIcon
          alt="Modal Handle Button"
          src="/images/system_information.png"
          name="System Information"
          onClick={handleModal}
        /> */}

      </section>
      {showModal && (
        <Modal closeModal={handleModal} title="MacOS  Animation">
          {/* <p className={styles['only-mobile']}>{onlyMobileMessage()}</p> */}
          <p className={styles['about']}>
            <a
              href="https://github.com/imanolortega/mac-dock"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the{' '}
              <span className={styles['yellow-link']}>repository</span>.
            </a>
            <a
              href="https://imanolortega.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my <span className={styles['yellow-link']}>website</span>.
            </a>
          </p>
        </Modal>
      )}
      <Dock />
    </main>
  )
}
