import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Researchers from "./components/clients/Researchers";
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
                            <div>Welcome</div>
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
                        <Route exact path="/"><div>Home</div></Route>
                        <Route path="/researcher">
                            <Researchers />
                        </Route>
                        <Route path="/presenter">
                            <Researchers />
                        </Route>
                        <Route path="/attendee">
                            <Researchers />
                        </Route>
                        
                    </>
                )}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
