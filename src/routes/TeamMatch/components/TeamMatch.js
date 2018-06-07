// @flow
import React from 'react'
import styles from './TeamMatch.css'
import fetchJsonp from 'fetch-jsonp'
import { Card, Button, message } from 'antd'
import MatchList from 'components/MatchList'
const { Meta } = Card

type Props = {
  match: Object
}
type State = {
  matchList: Array<Object>,
  followState: Boolean
}

class TeamMatch extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      matchList: [],
      followState: false
    }
  }
  componentDidMount () {
    const team = this.props.match.params.team
    const username = localStorage.getItem('username')
    fetchJsonp(`${__FOOTBALL__}team?key=6eedb4ba77e27df74b348f2b249d4be4&team=${team}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        matchList: res.result.list
      })
    })
    fetch(`/fav/getBy?gameId=${team}&&username=${username}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      if (res.length === 1) {
        this.setState({
          followState: true
        })
      }
    })
  }
  followIt = () => {
    const { followState } = this.state
    if (followState) {
      // 取消点赞
      fetch('/fav/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: localStorage.getItem('username'),
          gameId: this.props.match.params.team
        })
      }).then(res => res.json())
        .then(res => {
          // 后端正确
          if (res.success) {
            message.destroy()
            message.success(res.message)
          } else {
            message.destroy()
            message.info(res.message)
          }
        })
        .catch(e => console.log('Oops, error', e))
      this.setState({
        followState: false
      })
    } else {
      fetch('/fav/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: localStorage.getItem('username'),
          gameId: this.props.match.params.team
        })
      }).then(res => res.json())
        .then(res => {
          // 后端正确
          if (res.success) {
            message.destroy()
            message.success(res.message)
          } else {
            message.destroy()
            message.info(res.message)
          }
        })
        .catch(e => console.log('Oops, error', e))
      this.setState({
        followState: true
      })
    }
  }
  render () {
    const { matchList } = this.state
    const team = this.props.match.params.team
    return (
      <div className={styles['match-contain']}>
        <Card
  >
          <Meta
            title={<h1 style={{ color: '#FFF' }}>{team}</h1>}
            description={
              <Button type='primary' onClick={this.followIt}>
                {
                  this.state.followState
                  ? '取消收藏'
                  : '+收藏'
                }</Button>}
    />
        </Card>
        <MatchList {...{ matchList }} />
      </div>
    )
  }
}

export default TeamMatch
