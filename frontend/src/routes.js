import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from './pages/Login';
import LoginUser from './pages/LoginUser';
import Logged from './pages/Logged';
import RegisterCompany from './pages/RegisterCompany';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Login" component={LoginUser} />
                <Route path="/Logged" component={Logged} />
                <Route path="/RegisterCompany" component={RegisterCompany} />
                {/*<Route path="/product/:id" component={Product} />
                <PrivateRouteUser path="/ForgotPassword" component={ForgotPassword} />
                <Route path="/Register" component={Register} />
                <Route path="/RegisterAddress/:client" component={RegisterAddress} />
                <PrivateRouteUser path="/UpdateAddress/:client" component={UpdateAddress} />
                <PrivateRouteUser path="/UpdateClient/:id" component={UpdateClient} />
                <PrivateRouteUser path="/ShopCart" component={ShopCart} />
                <PrivateRouteUser path="/Payment" component={Payment} />*/}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;