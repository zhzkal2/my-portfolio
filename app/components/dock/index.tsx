import { buttons } from '../../utils/config'
import { MouseEvent, useState } from 'react'
import DockItem from '../dock-item'
import styles from './dock.module.scss'
import { DockProps } from '../../utils/interfaces'

export default function Dock({

}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeItem, setActiveItem] = useState<DockProps>({ name: '', active: false })

  const handleMouseMove = (event: MouseEvent): void => {
    setMousePosition({
      x: event.pageX || 0,
      y: event.pageY || 0,
    })
  }

  const handleItemStateChange = (name: string, isActive: boolean) => {
    setActiveItem({ name, active: isActive });

    return (
      <nav
        className={styles['dock']}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <ul className={styles['dock-inner']}>
          {buttons.map(({ active, name, src }) => (
            <DockItem
              active={active}
              key={name}
              mousePosition={mousePosition}
              name={name}
              src={src}
            />
          ))}
        </ul>
      </nav>
    )
  }
}