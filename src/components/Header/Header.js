// @flow
import React from 'react'
import Logo from 'components/Logo'
import styles from './Header.css'
import UserMenu from 'components/UserMenu'

const Header = () => (
  <header className={styles['header']}>
    <Logo />
    <UserMenu />
  </header>
)

export default Header
