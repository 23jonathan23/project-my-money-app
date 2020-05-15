import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './App'
import Dashboard from '../pages/dashboard/Dashboard'
import BillingCycle from '../pages/billingCycle/BillingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='billingCycles' component={BillingCycle} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)
