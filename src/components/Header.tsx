import rocketLogo from '../assets/rocket-logo.svg'

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo do To Do App" />
      <p><span>to</span>do</p>
    </header>
  )
}