// @flow
import React from 'react'
import styles from './MatchList.css'
import { List, Avatar, Icon } from 'antd'

type Props = {
  matchList: Array<Object>,
}
type State = {
}

class MatchList extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const { matchList } = this.props
    return (
      <List
        itemLayout='vertical'
        size='large'
        dataSource={matchList}
        renderItem={(item, index) => (
          <List.Item
            key={index}
      >
            <List.Item.Meta
              title={<h3><Icon type='flag' style={{ color: 'red' }} />{item.c1}</h3>}
              description={<p><Icon type='clock-circle-o' />{item.c2} | {item.c3}</p>}
        />
            <div style={{ textAlign: 'center' }}>
              <h1><Icon type='trophy' style={{ color: 'yellow' }} />{item.c4R}</h1>
              <h1>{item.c4T1}
                <Icon type='fork' style={{ color: 'red' }} />
                {item.c4T2}</h1>
            </div>
          </List.Item>
    )}
  />
    )
  }
}

export default MatchList
