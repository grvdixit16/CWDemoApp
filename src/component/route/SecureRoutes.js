import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
export const SecureRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/employee', state: { from: props.location } }} />
    )} />
)