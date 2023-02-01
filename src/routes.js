import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from './pages/Home'
import Orders from './pages/Orders'

const Routes = () => {

    return (

        <Router>
            <Switch>
                <Route  exact path='/' component={Home}/>
                <Route  exact path='/pedidos' component={Orders} />
            </Switch>
        </Router>

    )
}
export default Routes