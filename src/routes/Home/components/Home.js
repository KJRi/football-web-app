// @flow
import React from 'react'
import styles from './Home.css'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
const { Meta } = Card

type Props = {
  match: Object
}
type State = {
}

class Home extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {
    fetch(`/game/get`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render () {
    return (
      <div className={styles['home-contain']}>
        <Link to='/id/5b17c579c4635291dc99656b'>
          <Card
            hoverable
            cover={<img src='http://5b0988e595225.cdn.sohucs.com/images/20180606/1dc980cacbec4e77865fb16beb30036f.jpeg' />}
  >
            <Meta
              title={<h3 style={{ color: '#e8e8e8' }}>皇马官宣齐达内离任 3年9冠打造一代王朝</h3>}
    />
          </Card>
        </Link>
        <Link to='/id/5b17d119c4635291dc996574'>
          <Card
            hoverable
            cover={<img src='http://5b0988e595225.cdn.sohucs.com/images/20180606/94079c37b41744078cebe88f1d8a9685.jpeg' />}
  >
            <Meta
              title={<h3 style={{ color: '#e8e8e8' }}>英超频繁遭遇意甲球队“敲诈”，利物浦：怪我喽</h3>}
    />
          </Card>
        </Link>
        <Link to='/id/5b17d329c4635291dc996576'>
          <Card
            hoverable
            cover={<img src='https://i3.hoopchina.com.cn/blogfile/201806/05/BbsImg152816256339581_142125036472042_620x348.jpg' />}
  >
            <Meta
              title={<h3 style={{ color: '#e8e8e8' }}>曾带四支不同球队杀入十六强，神奇教练米卢的世界杯传奇</h3>}
    />
          </Card>
        </Link>
      </div>
    )
  }
}

export default withRouter(Home)
