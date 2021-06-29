import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AttendeeLogin from "./components/auth/AttendeeLogin";
import AttendeeRegister from "./components/auth/AttendeeRegister";
import Home from "./components/auth/Home";
import LoginTypes from "./components/auth/LoginTypes";

import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";

function Router() {
    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Navbar />
            
            
            <Switch>
                {loggedIn === false && (
                    <>
                        <Route path="/attendeeregister">
                            <AttendeeRegister />
                            
                        </Route>
                        <Route path="/attendeelogin">
                            <AttendeeLogin />
                        </Route>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route exact path="/home"><div>Home</div></Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        
                        
                    </>
                )}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
