import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Dashcart from './Component/Dashcart/Dashcart'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/cart' component={Dashcart}/>
    </Switch>
)