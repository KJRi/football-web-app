// @flow
import React from 'react'
import styles from './MatchSearch.css'
import fetchJsonp from 'fetch-jsonp'
import { Input, Tabs, Icon } from 'antd'
import MatchList from 'components/MatchList'
const TabPane = Tabs.TabPane
const Search = Input.Search

type Props = {}
type State = {
  matchList: Object,
  tabs: Object,
  views: Object,
  }

class MatchSearch extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      matchList: {},
      tabs: {},
      views: {}
    }
  }
  componentDidMount () {
    fetchJsonp(`${__FOOTBALL__}league?key=6eedb4ba77e27df74b348f2b249d4be4&league=英超`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        matchList: res.result,
        tabs: res.result.tabs,
        views: res.result.views
      })
    })
  }
  searchPst = (value) => {
    const evalue = value.trim()
    fetchJsonp(`${__FOOTBALL__}league?key=6eedb4ba77e27df74b348f2b249d4be4&league=${evalue}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        matchList: res.result,
        tabs: res.result.tabs,
        views: res.result.views
      })
    })
  }
  render () {
    const { matchList, tabs, views } = this.state
    console.log(matchList)
    return (
      <div className={styles['match-contain']}>
        <Search
          placeholder='请输入您想搜索的比赛'
          onSearch={this.searchPst}
          size='large'
        />
        <h1 style={{ textAlign: 'center' }}><Icon type='table' style={{ color: '#33A3DC' }} />{matchList.key}</h1>
        <Tabs defaultActiveKey='1'>
          {
            tabs.saicheng1
            ? <TabPane tab={tabs.saicheng1} key='1'>
              <MatchList {...{ matchList: views.saicheng1 }} />
            </TabPane>
            : ''
        }
          {
          tabs.saicheng2
          ? <TabPane tab={tabs.saicheng2} key='2'>
            <MatchList {...{ matchList: views.saicheng2 }} />
          </TabPane>
          : ''
      }
          {
        tabs.saicheng3
        ? <TabPane tab={tabs.saicheng3} key='3'>
          <MatchList {...{ matchList: views.saicheng3 }} />
        </TabPane>
        : ''
    }
        </Tabs>
      </div>
    )
  }
}

export default MatchSearch
