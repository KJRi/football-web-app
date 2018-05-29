// @flow
import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import styles from './UserMenu.css'

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <a href='/personal'>个人中心</a>
    </Menu.Item>
  </Menu>
)

type Props = {
  user: Object,
  style: Object
}
const username = localStorage.getItem('username')
export const UserMenu = ({ user, style }: Props) => (
  <div className={styles['profile']} style={style}>
    <Dropdown overlay={menu} trigger={['click']}>
      <a className='ant-dropdown-link' href='#'>
        { user ? user.name : username } <Icon type='down' />
      </a>
    </Dropdown>
  </div>
)

export default UserMenu
