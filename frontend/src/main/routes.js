import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '../pages/dashboard/Dashboard'
import BillingCycle from '../pages/billingCycle/BillingCycle'

export default props => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
)
