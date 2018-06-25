import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Dashcart from './Component/Dashcart/Dashcart';
import Venue from './Component/Venue/Venue'
import EventDetails from './Component/EventDetails/EventDetails';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Dashcart}/>
        <Route path='/venue' component={Venue} />
        <Route path='/details/:id' component={EventDetails} />
    </Switch>
)