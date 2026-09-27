import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Main from './Main'
import React from 'react'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
