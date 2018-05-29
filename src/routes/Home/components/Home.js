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
      <div>
        <Link to='/id/5b0d0145d5681e047cad3fe9'>
          <Card
            hoverable
            cover={<img src='http://pic-bucket.nosdn.127.net/photo/0005/2018-05-27/DIPO2ME500BV0005NOS.jpg' />}
  >
            <Meta
              title='欧冠决赛：皇马3-1利物浦'
    />
          </Card>
        </Link>
        <Link to='/id/5b0d0173d5681e047cad3fea'>
          <Card
            hoverable
            cover={<img src='http://pic-bucket.nosdn.127.net/photo/0005/2018-05-28/DISPVSP000BV0005NOS.png' />}
  >
            <Meta
              title='C罗又造霸气一幕!BBC请多合体几次 齐祖搞怪'
    />
          </Card>
        </Link>
        <Link to='/id/5b0d01d2d5681e047cad3fed'>
          <Card
            hoverable
            cover={<img src='http://pic-bucket.nosdn.127.net/photo/0005/2018-05-26/DINROK2900C90005NOS.png' />}
  >
            <Meta
              title='德国"迎新会":穆勒一来就耍宝 特狮小新团聚'
    />
          </Card>
        </Link>
        <Link to='/id/5b0d022ed5681e047cad3fef'>
          <Card
            hoverable
            cover={<img src='http://pic-bucket.nosdn.127.net/photo/0005/2018-05-26/DIORT4C70B4C0005NOS.jpg' />}
  >
            <Meta
              title='热身赛-中国1-0缅甸'
    />
          </Card>
        </Link>
        <Link to='/id/5b0d0265d5681e047cad3ff0'>
          <Card
            hoverable
            cover={<img src='http://pic-bucket.nosdn.127.net/photo/0005/2018-05-24/DIJT1HTD0B4C0005NOS.jpg' />}
  >
            <Meta
              title='国足拍全家福郑智站C位 训练场里皮亲力亲为'
    />
          </Card>
        </Link>
      </div>
    )
  }
}

export default withRouter(Home)
