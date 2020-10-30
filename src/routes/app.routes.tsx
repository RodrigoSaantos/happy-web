import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import DeleteOrphanage from '../pages/DeleteOrphanage'
import UpdateOrphanage from '../pages/UpdateOrphanage'
import PendingOrphanage from '../pages/PendingOrphanage'

function AppRoutes() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/delete-orphanage" component={DeleteOrphanage} />
      <Route path="/update-orphanage" component={UpdateOrphanage} />
      <Route path="/pending-orphanage" component={PendingOrphanage} />
    </Switch>
  </BrowserRouter>

  )
}

export default AppRoutes