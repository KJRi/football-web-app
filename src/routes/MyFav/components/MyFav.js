// @flow
import React from 'react'
import './MyFav.css'
import { List, Icon } from 'antd'

type Props = {}
type State = {
  likelist: Array<Object>
}

class MyFav extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      likelist: []
    }
  }
  componentWillMount () {
    const username = localStorage.getItem('username')
    fetch(`/fav/getByUser?username=${username}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        likelist: res
      })
    })
  }
  render () {
    const { likelist } = this.state
    console.log(likelist)
    return (
      <List
        style={{ background: '#FFF' }}
        header={<div>你的收藏:</div>}
        footer={<div>共{likelist.length}个收藏</div>}
        bordered
        dataSource={likelist}
        renderItem={item => (<List.Item
          onClick={() => { window.location.href = `/team/${item.gameId}` }}>
          <h1>{item.gameId}</h1>
        </List.Item>)}
  />
    )
  }
}

export default MyFav
