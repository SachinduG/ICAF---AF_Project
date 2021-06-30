import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import { Link, Redirect } from "react-router-dom";
//import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';
import bgimage from "../../assets/images/bg.jpg";
import { AppBar } from '@material-ui/core';


//import FooterLogo from "url:../../assets/images/favicon.png"

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    footer: {
        // color: 'transparent',
        //backgroundColor: theme.palette.background.paper,
        background: 'rgba(0,0,0,0.5)',
        color: '#fff',
        fontFamily: 'Nunito',
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },

});

function Footer(props) {
    const { classes } = props;

    return (
      <AppBar position="static" color="transparent" >
       {/*<Container >*/}
        <footer className={classes.footer} >
            <div className="footer-main-content">
                <div className="footer-content-left" >
                    {/*<img src="../app/assets/images/favicon.ico" alt="footer-logo" className="footer-logo" />*/}
                    <div className="details-links">
                        <Typography variant="h5" component="h3">
                            ICAF Conference
                        </Typography>
                    </div>
                </div>
                <div className="footer-content-right">
                    <div className="social-links">
                        <FacebookIcon />
                        <LinkedInIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                        <RedditIcon />

                    </div>
                    <p>&copy; By INTIMIDATORS. All rights reserved</p>
                </div>
            </div>
        </footer>
        {/*</Container>*/}
        </AppBar>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);