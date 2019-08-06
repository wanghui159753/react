import React from 'react';
import {Router, Route} from 'react-router'

import Login from '@/pager/login/index'
import Sys from '@/pager/set/sys/index'
import Role from '@/pager/set/role/index'
import Permission from '@/pager/set/permission/index'
import Menu from '@/component/menu'
import noMatch from '@/pager/set/permission/index'
const createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory()
// const Dashboard = React.createClass({
//     render() {
//         return <div>Welcome to the app!</div>
//     }
// })

export default class RouteConfig extends React.Component {
    render() {
        return <Router history={history}>
            <Route path='/' exact>
                {/*<IndexRoute component={Dashboard}/>*/}
                <Menu>
                    <Route path='sys' component={Sys}></Route>
                    <Route path='role' component={Role}></Route>
                    <Route path='permission' component={Permission}></Route>
                </Menu>
            </Route>
            <Route path='/login' component={Login}></Route>
            <Route component={noMatch}></Route>
        </Router>
    }
}

