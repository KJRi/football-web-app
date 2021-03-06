// @flow
import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import routes from '../../routes'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
// normalize with antd and add icons & animations
import 'antd/lib/style/css'
import '../../styles/core.css'
import styles from './CoreLayout.css'

export const CoreLayout = () => (
  <div className={styles['core-layout']}>
    <Header />
    <Sidebar />
    <div className={styles['viewport']}>
      <Switch>
        <Route path='/' component={routes.home} exact />
        <Route path='/matchSearch' component={routes.matchSearch} exact />
        <Route path='/teamSearch' component={routes.teamSearch} exact />
        <Route path='/matchScore' component={routes.matchScore} exact />
        <Route path='/footballMatch' component={routes.footballMatch} exact />
        <Route path='/myFav' component={routes.myFav} exact />
        <Route path='/myLike' component={routes.myLike} exact />
        <Route path='/myFollow' component={routes.myFollow} exact />
        <Route path='/id/:id' component={routes.post} exact />
        <Route path='/team/:team' component={routes.teamMatch} exact />
        <Route path='/editUserInfo' component={routes.editUserInfo} exact />
        <Route path='/circle/:username' component={routes.circle} exact />
        <Route path='/tagPost/:tag' component={routes.tagPost} exact />
        <Route path='/personal' component={routes.personal} exact />
        <Route path='/detail' component={routes.detail} exact />
        <Route path='/editPost' component={routes.editPost} exact />
        <Route path='/Login' component={routes.login} exact />
        <Route path='/register' component={routes.register} exact />
      </Switch>
    </div>
  </div>
)

export default CoreLayout
