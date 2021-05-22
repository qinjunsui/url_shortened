import React from 'react';
/** Import route module **/
import { Switch, Route, Redirect } from 'react-router-dom';
/** Import components **/
import Home from '../home';
import Shortened from '../shortened';
/** Import types */
import ROUTING_PATHS from './routes';

/** Integrated routing component for controlling the project route switch.*/
export default function Routing() {
    return (
        <Switch>
            <Redirect from={ROUTING_PATHS.ROOT} to={ROUTING_PATHS.HOME} exact />
            <Route path={ROUTING_PATHS.HOME} component={Home} exact />
            <Route path={ROUTING_PATHS.SHORTENED} component={Shortened} exact />
        </Switch>
    )
}