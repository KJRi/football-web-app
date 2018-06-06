// @flow
import React from 'react'
import styles from './TeamSearch.css'
import fetchJsonp from 'fetch-jsonp'
import { Input } from 'antd'
import MatchList from 'components/MatchList'
const Search = Input.Search

type Props = {}
type State = {
  matchList: Array<Object>
}

class TeamSearch extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      matchList: []
    }
  }
  searchPst = (value) => {
    const evalue = value.trim()
    fetchJsonp(`${__FOOTBALL__}team?key=6eedb4ba77e27df74b348f2b249d4be4&team=${evalue}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        matchList: res.result.list
      })
    })
  }

  render () {
    const { matchList } = this.state
    return (
      <div className={styles['match-contain']}>
        <Search
          placeholder='请输入您想搜索的球队'
          onSearch={this.searchPst}
          size='large'
        />
        <MatchList {...{ matchList }} />
      </div>
    )
  }
}

export default TeamSearch
