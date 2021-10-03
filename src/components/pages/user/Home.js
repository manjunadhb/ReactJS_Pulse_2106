import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Edit from '../admin/files(manageBatches)/Edit'
import ManageBatches from '../admin/ManageBatches'
import ManageUsers from '../admin/ManageUsers'
import Login from '../common/Login'
import Navigation from './Navigation'

const DailyStatusUpdate = React.lazy(() => import('./DailyStatusUpdate'))
const Tasks = React.lazy(() => import('./Tasks'))
const Messages = React.lazy(() => import('./Messages'))
const Leaves = React.lazy(() => import('./Leaves'))
const Request = React.lazy(() => import('./Requests'))

export default function Home() {
    const match = useRouteMatch();
    console.log(match);

    return (
        <div>
            {/* <Navigation /> */}
            <React.Suspense fallback="Page is loading">
                <Switch>
                    <Route exact path="/home" component={Login} />
                    <Route path="/home/dsu" component={DailyStatusUpdate} />
                    <Route path="/home/tasks" component={Tasks} />
                    <Route path="/home/messages" component={Messages} />
                    <Route path="/home/leaves" component={Leaves} />
                    <Route path="/home/requests" component={Request} />
        
                </Switch>
            </React.Suspense>
        </div>
    )
}
