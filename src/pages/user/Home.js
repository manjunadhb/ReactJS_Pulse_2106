import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'

const DailyStatusUpdate = React.lazy(()=>import('./DailyStatusUpdate'))
const Tasks = React.lazy(()=>import('./Tasks'))
const Messages = React.lazy(()=>import('./Messages'))
const Leaves = React.lazy(()=>import('./Leaves'))
const Request = React.lazy(()=>import('./Requests'))

export default function Home() {
   
    return (
        <div>
            <Navigation/>
            <React.Suspense fallback="Page is loading">
            <Switch>
                <Route path="/home" exact component={Home}/>
                <Route path="/dsu" component={DailyStatusUpdate}/>
                <Route path="/tasks" component={Tasks}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/leaves" component={Leaves}/>
                <Route path ="/requests" component={Request}/>
            </Switch>
            </React.Suspense>
        </div>
    )
}
