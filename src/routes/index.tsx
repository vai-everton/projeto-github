import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from '../pages/Dashboard/Dashboard'

const Routes:React.FC = () => (
    <Switch>
        <Route path="/" exact component={ Dashboard } />
        <Route path="/repository" component={ Dashboard } />
    </Switch>
)

export default Routes;