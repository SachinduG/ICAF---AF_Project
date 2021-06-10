import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import {Button, Menu, makeStyles, AppBar, Toolbar, Typography, MenuItem} from "@material-ui/core";

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
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const { loggedIn } = useContext(AuthContext);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOpenMenu1 = e => {
        setAnchorEl1(e.currentTarget);
    };

    const handleMenuClose1 = () => {
        setAnchorEl1(null);
    };

    const handleOpenMenu2 = e => {
        setAnchorEl1(e.currentTarget);
    };

    const handleMenuClose2 = () => {
        setAnchorEl1(null);
    };

    return (
        <div>
            {loggedIn === false && (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="nav-link" href="/attendeeregister" style={{marginLeft: 610}}>Register</a>
                        <a className="nav-link" href="/attendeelogin">Log In</a>
                    </nav>
                </div>

            )}
            {loggedIn === true && (

                <div className={classes.root}>
                    <AppBar position="static" color='primary'>
                        <Toolbar>
                            <Typography>
                                <a className="nav-link" href="/home"><HomeRoundedIcon/></a>
                            </Typography>
                            <Button
                                aria-controls='menu'
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
                                onClick={handleOpenMenu1}
                                disableRipple
                                variant='contained'
                                className={classes.menuButton}
                                color='default'
                                style={{color: "black"}}>Events
                            </Button>
                            <Button
                                aria-controls='menu2'
                                startIcon={<AssignmentTurnedInRoundedIcon/>}
                                onClick={handleOpenMenu2}
                                disableRipple
                                variant='contained'
                                className={classes.menuButton}
                                color='default'
                                style={{color: "black"}}>Approved Contents
                            </Button>
                            <LogOutBtn/>
                        </Toolbar>
                    </AppBar>
                    <Menu
                        id='menu'
                        style={{ marginTop: '40px' }}
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}>
                        <MenuItem onClick={handleMenuClose}><a href="/researcher" style={{textDecoration: 'none'}}>Researcher</a></MenuItem>
                        <MenuItem onClick={handleMenuClose}><a href="/presenter" style={{textDecoration: 'none'}}>Presenter</a></MenuItem>
                        <MenuItem onClick={handleMenuClose}><a href="/attendee" style={{textDecoration: 'none'}}>Attendee</a></MenuItem>
                    </Menu>
                    <Menu
                        id='menu2'
                        style={{ marginTop: '40px' }}
                        onClose={handleMenuClose1}
                        anchorEl={anchorEl1}
                        open={Boolean(anchorEl1)}>
                        <MenuItem onClick={handleMenuClose1}><a href="#" style={{textDecoration: 'none'}}>Research Paper</a></MenuItem>
                        <MenuItem onClick={handleMenuClose1}><a href="#" style={{textDecoration: 'none'}}>Workshops</a></MenuItem>
                    </Menu>
                    <Menu
                        id='menu2'
                        style={{ marginTop: '40px' }}
                        onClose={handleMenuClose2}
                        anchorEl={anchorEl2}
                        open={Boolean(anchorEl2)}>
                        <MenuItem onClick={handleMenuClose2}><a href="#" style={{textDecoration: 'none'}}>Research Paper</a></MenuItem>
                        <MenuItem onClick={handleMenuClose2}><a href="#" style={{textDecoration: 'none'}}>Workshops</a></MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
}

export default Navbar;
