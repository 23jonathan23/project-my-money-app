import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../pages/dashboard/Dashboard'
import BillingCycle from '../pages/billingCycle/BillingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Redirect from='*' to="/" />
  </Router>
)