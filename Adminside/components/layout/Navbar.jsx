import React from "react";
import {Link} from "@material-ui/core";

function Navbar(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/client">Clients</Link>
        </div>
    );
}

export default Navbar;