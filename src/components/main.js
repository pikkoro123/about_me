import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Roster from './about'
import Activity from './activity'
// import Schedule from './Schedule'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={Roster}/>
      <Route path='/activity' component={Activity}/>
    </Switch>
  </main>
)

export default Main