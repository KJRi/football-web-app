// @flow
import React from 'react'
import styles from './TeamName.css'
import { Button } from 'antd'
type Props = {
  teamName: String
}
type State = {}

class TeamName extends React.PureComponent<Props, State> {
  render () {
    const { teamName } = this.props
    const linkTeam = `/team/${teamName}`
    return (
      <div className={styles['team-name']}>
        <a href={linkTeam}>{teamName}</a>
      </div>
    )
  }
}

// const ReactTemplate = (props: Props) => {
//   return (
//     <div>hello world</div>
//   )
// }

export default TeamName
