import rocketLogo from '../assets/rocket-logo.svg'

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo do To Do App" />
      <h1><span>to</span>do</h1>
    </header>
  )
}