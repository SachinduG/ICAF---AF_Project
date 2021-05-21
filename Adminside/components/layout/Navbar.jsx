import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

function Navbar(){
    const { loggedIn } = useContext(AuthContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="nav-link" href="/" ><HomeRoundedIcon/><span className="sr-only">(current)</span> </a>
                {loggedIn === false && (
                    <>
                        <a className="nav-link" href="/register">Register</a>
                        <a className="nav-link" href="/login">Log In</a>
                    </>
                )}

                {loggedIn === true && (
                    <>
                        <a className="nav-link" href="/client">Clients</a>
                        <LogOutBtn/>
                    </>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
