import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar(){
    const classes = useStyles();

    const { loggedIn } = useContext(AuthContext);

    return (
        <div>
            {loggedIn === false && (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="nav-link" href="/register">Register</a>
                        <a className="nav-link" href="/login">Log In</a>
                    </nav>
                </div>

            )}
            {loggedIn === true && (
                <div className={classes.root}>
                    <AppBar position="static" color='primary'>
                        <Toolbar>
                            <a className="nav-link" href="/" ><HomeRoundedIcon/><span className="sr-only">(current)</span> </a>
                            <Typography variant="h6" className={classes.title} >
                                <a className="nav-link" href="/client">Clients</a>
                            </Typography>
                            <LogOutBtn/>
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </div>
    );
}

export default Navbar;
