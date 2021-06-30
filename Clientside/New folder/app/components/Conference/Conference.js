import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import ImageCard from '../ImageCard/ImageCard';
//import Places from '../Places/Places';
//import useWindowPosition from '../useWindowPosition/useWindowPosition';
import Typography from "@material-ui/core/Typography";
import {AppBar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(192,192,192,0.3)',
        color: '#000000',
        fontFamily: 'Nunito',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    conference: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#000000',
    }
}));
export default function () {
    const classes = useStyles();
    //const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="conference-details" color="transparent" >
            <Typography variant="h3" component="h2" className={classes.conference}>
                Conference Title
            </Typography>
        </div>
    );
}