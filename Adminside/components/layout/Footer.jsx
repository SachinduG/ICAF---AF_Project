import React from "react";
import Typography from '@material-ui/core/Typography';

function Footer() {
    return (
        <div className="footer">
            <footer class="py-3 bg-dark fixed-bottom">
                <div class="container">
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <a color="inherit" href="https://sachindug.github.io/sachindugimhana.github.io/">
                            Sachindu
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