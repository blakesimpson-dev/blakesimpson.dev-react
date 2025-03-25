import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import React from 'react'
import Wedding from './Wedding'
import RSVP from '../wedding-pages/RSVP'
import Accomodation from '../wedding-pages/Accomodation'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/wedding" exact>
          <Wedding />
        </Route>
        <Route path="/rsvp" exact>
          <RSVP />
        </Route>
        <Route path="/accomodation" exact>
          <Accomodation />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
