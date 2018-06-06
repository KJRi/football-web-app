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
      case '/matchScore':
        key = '0'
        break
      case '/footballMatch':
        key = '1'
        break
      case '/teamSearch':
        key = '2'
        break
      case '/matchSearch':
        key = '3'
        break
      case '/detail':
        key = '5'
        break
      case '/editPost':
        key = '6'
        break
      case '/editUserInfo':
        key = '8'
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
      case '/tagPost/赛事分析':
        key = '13'
        break
      case '/tagPost/赛事吐槽':
        key = '14'
        break
      case '/tagPost/赛事新闻':
        key = '15'
        break
      case '/tagPost/最爱球队':
        key = '16'
        break
    }
    this.setState({ current: key })
  }

  render () {
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
          <SubMenu key='sub1' title={<span><Icon type='calendar' /><span>赛事频道</span></span>}>
            <Menu.Item key='0'>
              <Link to='/matchScore'>全部赛事</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/teamSearch'>球队赛事</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/matchSearch'>联赛赛事</Link>
            </Menu.Item>
            <Menu.Item key='1'>
              <Link to='/footballMatch'>积分榜</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title={<span><Icon type='global' /><span>球吧</span></span>}>
            <Menu.Item key='5'><Link to='/detail'>全部</Link></Menu.Item>
            <SubMenu key='sub3' title={<span><Icon type='slack' /><span>Tag</span></span>}>
              <Menu.Item key='13'><Link to='/tagPost/赛事分析'>赛事分析</Link></Menu.Item>
              <Menu.Item key='14'><Link to='/tagPost/赛事吐槽'>赛事吐槽</Link></Menu.Item>
              <Menu.Item key='15'><Link to='/tagPost/赛事新闻'>赛事新闻</Link></Menu.Item>
              <Menu.Item key='16'><Link to='/tagPost/最爱球队'>最爱球队</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key='6'><Link to='/editPost'><Icon type='edit' />发帖</Link></Menu.Item>
          </SubMenu>
          <SubMenu key='sub4' title={<span><Icon type='user' /><span>我的</span></span>}>
            <Menu.Item key='8'><Link to='/editUserInfo'>修改信息</Link></Menu.Item>
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
