// @flow
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import styles from './SideMenu.css'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

type Props = {
  location: Location
}

class SideMenu extends React.Component {
  props: Props

  state: {
    current: string
  }

  handleClick: (e: Object) => void

  activeMenuItem: () => void

  constructor (props: Props) {
    super(props)

    this.state = { current: '-1' }

    this.handleClick = this.handleClick.bind(this)
    this.activeMenuItem = this.activeMenuItem.bind(this)
  }

  componentWillMount () {
    const { location } = this.props
    const { username } = localStorage.getItem('username')
    this.activeMenuItem(location)
  }

  componentWillReceiveProps (nextProps: Props) {
    const { location } = nextProps
    this.activeMenuItem(location)
  }

  handleClick (e: Object) {
    this.setState({ current: e.key })
  }

  activeMenuItem (location: Location) {
    const { pathname } = location
    let key
    switch (pathname) {
      case '/':
        key = '-1'
        break
      case '/github/k2data/repos':
        key = '0'
        break
      case '/personal':
        key = '9'
        break
      case '/myFav':
        key = '10'
        break
      case '/myFollow':
        key = '11'
        break
      case '/myLike':
        key = '12'
        break
    }
    this.setState({ current: key })
  }

  render () {
    const { username } = this.state
    const circle = `/circle/${username}`
    return (
      <div className={styles['nav']}>
        <Menu onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode='inline'
          theme='dark'
          className={styles['menu']}
        >
          <Menu.Item key='-1'>
            <Icon type='dribbble' />
            <Link to='/'>首页</Link>
          </Menu.Item>
          <Menu.Item key='0'>
            <Icon type='calendar' />
            <Link to='/github/k2data/repos'>赛事频道</Link>
          </Menu.Item>
          <SubMenu key='sub1' title={<span><Icon type='notification' /><span>足球资讯</span></span>}>
            <MenuItemGroup title='Item 1'>
              <Menu.Item key='1'>Option 1</Menu.Item>
              <Menu.Item key='2'>Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title='Item 2'>
              <Menu.Item key='3'>Option 3</Menu.Item>
              <Menu.Item key='4'>Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key='sub2' title={<span><Icon type='global' /><span>球吧</span></span>}>
            <Menu.Item key='5'>Option 5</Menu.Item>
            <Menu.Item key='6'>Option 6</Menu.Item>
            <SubMenu key='sub3' title='我的帖子'>
              <Menu.Item key='7'><Link to={circle}>我的帖子</Link></Menu.Item>
              <Menu.Item key='8'><Link to='/editPost'><Icon type='edit' />发帖</Link></Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key='sub4' title={<span><Icon type='user' /><span>我的</span></span>}>
            <Menu.Item key='9'><Link to='/personal'>个人中心</Link></Menu.Item>
            <Menu.Item key='10'><Link to='/myFav'>我的收藏</Link></Menu.Item>
            <Menu.Item key='11'><Link to='/myFollow'>我的关注</Link></Menu.Item>
            <Menu.Item key='12'><Link to='/myLike'>我的点赞</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(SideMenu)
