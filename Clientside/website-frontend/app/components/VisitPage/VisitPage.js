//import React from 'react';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard/ImageCard';
import Places from '../Places/Places';
import useWindowPosition from '../useWindowPosition/useWindowPosition';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import { TouchableWithoutFeedback, Text } from 'react-native';

const useStyles = makeStyles((theme) => ({
     root: {
         minHeight: '90vh',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         [theme.breakpoints.down('md')]: {
             flexDirection: 'column',
         },
     },
    keynotetitle: {
        minHeight: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        //fontFamily: 'Nunito',
        //fontSize: 'inherit',
        padding: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    keynotebutton: {
        width: 180,
        height: 180,
        fontSize: '50px',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#fff',
    }
}));
export default function () {
     const classes = useStyles();
     const checked = useWindowPosition('header');

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

     return (
         <div className={classes.root} id="visit-page">
             <div className={classes.keynotetitle}>
                 <Button
                     color="inherit"
                     aria-controls="customized-menu"
                     aria-haspopup="true"
                     size="large"
                     onClick={handleClick} className={classes.keynotebutton}>
                     Key Notes</Button>
                 {/*<Typography variant="h3" component="h1">*/}
                 {/*    Key Notes*/}
                 {/*</Typography>*/}

             </div>

             <ImageCard place={Places[3]} checked={checked} />
             <ImageCard place={Places[2]} checked={checked} />
             <ImageCard place={Places[1]} checked={checked} />
             <ImageCard place={Places[0]} checked={checked} />

         </div>
     );
 }