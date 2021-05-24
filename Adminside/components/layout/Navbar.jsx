import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {Button, MenuList, Menu, makeStyles, AppBar, Toolbar, Typography} from "@material-ui/core";

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
    abRoot: {
        backgroundColor: "#A0A0A0"
    },
    abStatic: {
        border: "#202020 1px"
    },
}));

function Navbar(){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const { loggedIn } = useContext(AuthContext);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = e => {

    }

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
                    <AppBar position="static" style={{ borderRadius: "80px" }} classes={{ root: classes.abRoot, positionStatic: classes.abStatic }}>
                        <Toolbar>
                            <a className="nav-link" href="/" style={{color: "black"}}><HomeRoundedIcon/></a>
                            <Typography variant="h6" className={classes.title} >
                                <Button aria-controls='menu1'
                                        onClick={handleOpenMenu}
                                        disableRipple
                                        variant='contained'
                                        color='transparent'
                                        style={{color: "black"}}>Clients
                                </Button>
                            </Typography>
                            <Typography variant="h6" className={classes.title} >
                                <Button aria-controls='menu2'
                                        onClick={handleOpenMenu}
                                        disableRipple
                                        variant='contained'
                                        color='transparent'
                                        style={{color: "black"}}>Events
                                </Button>
                            </Typography>
                            <LogOutBtn/>
                        </Toolbar>
                    </AppBar>
                    <Menu
                        id='menu1'
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}>
                        <MenuList onClick={handleMenuClose}>Researchers</MenuList>
                        <MenuList onClick={handleMenuClose}>Presenters</MenuList>
                        <MenuList onClick={handleMenuClose}>Attendees</MenuList>
                    </Menu>
                    <Menu
                        id='menu2'
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}>
                        <MenuList onClick={handleMenuClose}>Research Papers</MenuList>
                        <MenuList onClick={handleMenuClose}>Presentations</MenuList>
                        <MenuList onClick={handleMenuClose}>Workshops</MenuList>
                    </Menu>
                </div>
            )}
        </div>
    );
}

export default Navbar;
