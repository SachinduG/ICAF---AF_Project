import React from "react";
import Typography from '@material-ui/core/Typography';

function Footer() {
    return (
        <div className="footer">
            <footer className="py-3 bg-dark fixed-bottom">
                <div className="container">
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <a color="inherit" href="https://sachindug.github.io/sachindugimhana.github.io/">
                            Website
                        </a>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </div>
            </footer>
        </div>
    );
}

export default Footer;