import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from '../pages/Dashboard/Dashboard'
import Repositories from '../pages/Repository/index'

const Routes:React.FC = () => (
    <Switch>
        <Route path="/" exact component={ Dashboard } />
        <Route path="/repository" component={ Repositories } />
    </Switch>
)

export default Routes;