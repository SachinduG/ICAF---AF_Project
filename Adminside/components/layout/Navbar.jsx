import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import {Button, MenuList, Menu, makeStyles, AppBar, Toolbar, Typography, MenuItem} from "@material-ui/core";
import Clients from '../clients/Clients';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 10,
        marginRight: 10,
        '&:hover':{
            background: 'white',
        },
    },
    title: {
        flexGrow: 1,
    },

}));

function Navbar(){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const { loggedIn } = useContext(AuthContext);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {loggedIn === false && (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="nav-link" href="/" style={{marginLeft: 610}}>Welcome</a>
                            <a className="nav-link" href="/register">Register</a>
                            <a className="nav-link" href="/login">Log In</a>
                    </nav>
                </div>

            )}
            {loggedIn === true && (

                <div className={classes.root}>
                    <AppBar position="static" color='primary'>
                        <Toolbar>
                            <Typography>
                                <a className="nav-link" href="/"><HomeRoundedIcon/></a>
                            </Typography>
                            <Button
                                aria-controls='menu1'
                                startIcon={<PeopleOutlineRoundedIcon/>}
                                onClick={handleOpenMenu}
                                disableRipple
                                variant='contained'
                                className={classes.menuButton}
                                color='default'
                                style={{color: "black"}}>Clients
                            </Button>
                            <Button
                                aria-controls='menu2'
                                startIcon={<DescriptionRoundedIcon/>}
                                onClick={handleOpenMenu}
                                disableRipple
                                variant='contained'
                                className={classes.menuButton}
                                color='default'
                                style={{color: "black"}}>Events
                            </Button>
                            <LogOutBtn/>
                        </Toolbar>
                    </AppBar>
                    <Menu
                        style={{ marginTop: '40px' }}
                        id='menu1'
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}>
                        <MenuItem onClick={handleMenuClose}><Clients/></MenuItem>
                        <MenuItem onClick={handleMenuClose}>Presenters</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Attendees</MenuItem>
                    </Menu>
                    <Menu
                        style={{ marginTop: '40px' }}
                        id='menu2'
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}>
                        <MenuItem onClick={handleMenuClose}>Research Papers</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Presentations</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Workshops</MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
}

export default Navbar;
