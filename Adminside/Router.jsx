import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function Router(){
    return <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <div>Home</div>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/client">
                <div>Clients</div>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;