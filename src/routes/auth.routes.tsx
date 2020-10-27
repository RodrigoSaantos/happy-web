import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import OrphanagesMap from '../pages/OrphanagesMap'
import Orphanage from '../pages/Orphanage'
import CreateOrphanage from '../pages/CreateOrphanage'
import Login from '../pages/Login'
import ForgotMyPassword from '../pages/ForgotMyPassword'
import RedefinitionPassword from '../pages/RedefinitionPassword'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/app' component={OrphanagesMap} />
        <Route path='/orphanages/create' component={CreateOrphanage} />
        <Route path='/orphanages/:id' component={Orphanage} />
        <Route path='/login/' component={Login} />
        <Route path='/esqueci-minha-senha/' component={ForgotMyPassword} />
        <Route path='/redefinicao-de-senha/' component={RedefinitionPassword} />
      </Switch>

    </BrowserRouter>

  )
}

export default AuthRoutes