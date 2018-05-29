// @flow
import React from 'react'
import styles from './Match.css'

type Props = {}
type State = {
}

class Match extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {
    // fetch
  }

  render () {
    return (
      <iframe src='//data.7m.com.cn/lottery/jfb/head_ft.html' width='100%' height='100%' />
    )
  }
}

export default Match
