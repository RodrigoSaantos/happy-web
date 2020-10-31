import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import DeleteOrphanage from '../pages/DeleteOrphanage'
import UpdateOrphanage from '../pages/UpdateOrphanage'
import PendingOrphanage from '../pages/PendingOrphanage'
import Landing from '../pages/Landing'
import OrphanagesMap from '../pages/OrphanagesMap'
import CreateOrphanage from '../pages/CreateOrphanage'
import Orphanage from '../pages/Orphanage'

function AppRoutes() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login"> <Redirect to="/dashboard" /> </Route>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/delete-orphanage" component={DeleteOrphanage} />
      <Route path="/update-orphanage" component={UpdateOrphanage} />
      <Route path="/pending-orphanage" component={PendingOrphanage} />
      <Route path='/app' component={OrphanagesMap} />
      <Route path='/orphanages/create' component={CreateOrphanage} />
      <Route path='/orphanages/:id' component={Orphanage} />
    </Switch>
  </BrowserRouter>

  )
}

export default AppRoutes