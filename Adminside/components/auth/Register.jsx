import React, {useContext, useState} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from '@material-ui/core/styles';
import {Container, CssBaseline, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://sachindug.github.io/sachindugimhana.github.io/">
                Sachindu
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Register() {
    const classes = useStyles();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function register(e){
        e.preventDefault();
        try{
            const registerData = {
                fname,
                lname,
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/", registerData);
            await getLoggedIn();
            history.push("/");
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are successfully sign in!',
                showConfirmButton: false,
                timer: 1500
            })

        }catch (err){
            console.error(err);
        }
    }

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
            <form onSubmit={register} className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="fname" name="fname" label="First Name" variant="outlined" fullWidth required autoFocus
                                   type="text"
                                   onChange={(e) => setFname(e.target.value)}
                                   value={fname}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="lname" name="lname" label="Last Name" variant="outlined" fullWidth required
                                   type="text"
                                   onChange={(e) => setLname(e.target.value)}
                                   value={lname}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="email" name="email" label="Email Address" variant="outlined" fullWidth required
                                   type="email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   value={email}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="password" name="password"label="Password" variant="outlined" fullWidth required
                                   type="password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   value={password}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="passwordVerify" name="passwordVerify" label="Confirm Password" variant="outlined" fullWidth required
                                   type="password"
                                   onChange={(e) => setPasswordVerify(e.target.value)}
                                   value={passwordVerify}
                        />
                    </Grid>
                </Grid>

                <button type="submit" className="btn btn-outline-success" style={{marginLeft:150, marginTop:20}}>Register</button><br/><br/>
                <Grid container justify="flex-center">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
            </div>
            <Box mt={30} mr={10}>
                <Copyright />
            </Box>
    </Container>
    );
}

export default Register;
