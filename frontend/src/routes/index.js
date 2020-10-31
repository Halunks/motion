import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthComponent from '../HOC/AuthComponent';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login'

export const Routes = () => {
    return <>
        <Router>
            <Switch>
                <Route path="/auth/login" component={Login} exact />
                <Route path='/home/feed' component={AuthComponent(Home)} exact />
                <Route path='/home/friends' component={AuthComponent(Home)} exact />
                <Route path='/home/users' component={AuthComponent(Home)} exact />
                <Route path='/*' component={AuthComponent(Home)} exact />
                {/*<Route path='/users' component={AuthComponent(FindFriends)} exact />
                <Route path='/users/:userId' component={UserDetail} />
                <Route path='/userProfileUpdate' component={AuthComponent(UpdateProfile)} exact />*/}
            </Switch>
        </Router>
    </>
}