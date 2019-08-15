import React from 'react';
import {Router, Route,Switch, Redirect,BrowserRouter} from 'react-router'

import Login from '@/pager/login/index'
import Menu from '@/component/menu'
import noMatch from '@/pager/404/404'
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory()

export default class RouteConfig extends React.Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/set/role'></Redirect>
                </Route>
                <Route path='/set' component={Menu}></Route>
                <Route path='/login' component={Login}></Route>
            </Switch>
        </Router>
    }
}

