// @flow
import React from 'react'
import styles from './MatchScore.css'

type Props = {}
type State = {
}

class MatchScore extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <iframe src='//freelive.7m.com.cn/live.aspx'
        height='100%' width='100%' scrolling='yes' border='0' frameBorder='0' />
    )
  }
}

export default MatchScore
