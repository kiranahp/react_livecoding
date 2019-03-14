import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Page/Home';
import LogIn from '../Page/LogIn';
import Profile from '../Page/Profile';
import Romance from '../Page/Romance';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/LogIn' component={LogIn} />
            <Route exact path='/Profile' component={Profile} />
            <Route exact path='/Romance' component={Romance} />
        </Switch>
    );
};

export default MainRoute;