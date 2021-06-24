import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Researchers from "./components/clients/Researchers";
import Presenters from "./components/clients/Presenters";
import Attendees from "./components/clients/Attendees";
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
                        <Route exact path="/">
                            ICAF
                            The Administrative Web Portal that will provide
                            varying controls over the entire population
                            of Smart EVSE through the Admin Interface,
                            alongside individual customer EVSE support
                            through the Management Console.
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route exact path="/home"><div>Home</div></Route>
                        <Route path="/researcher">
                            <Researchers />
                        </Route>
                        <Route path="/presenter">
                            <Presenters />
                        </Route>
                        <Route path="/attendee">
                            <Attendees />
                        </Route>
                        
                    </>
                )}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
