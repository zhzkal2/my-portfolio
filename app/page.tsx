'use client'

import { useState } from 'react'
import DesktopIcon from './components/desktop-icon'
import Dock from './components/dock'
import Modal from './components/modal'
import Navbar from './components/navbar'
import styles from './components/modal/modal.module.scss'

export default function Home() {
  const [showModal, setShowModal] = useState(true)

  const handleAppClick = (name: string, isActive: boolean) => {
    setActiveApp(isActive ? name : null);
  };

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
        <Modal closeModal={handleModal} >
          <p>안녕하세요</p>
        </Modal>
      )}
      <Dock
        active={active}
        name={name}
      />
    </main>
  )
}
