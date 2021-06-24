import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { Container, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        minWidth: 250,
    },
    title: {
        fontSize: 25,
    },
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#AAB7B8',
        width: '95%',
        borderRadius: 15,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(14),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login() {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function login(e) {
        e.preventDefault();

        try {
            const loginData = {
                email,
                password,
            };

            await axios.post("http://localhost:5000/auth/login", loginData);

            await getLoggedIn();
            history.push("/home");
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are successfully log in!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or Password is wrong!'
            });
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" style={{ marginRight: 45, marginTop: 20 }}>
                    Sign In
                </Typography>

                <form onSubmit={login} className={classes.form}>

                    <div className="form-group">
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Email Address" margin="normal" fullWidth required autoFocus
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div className="form-group">
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <LockOpenIcon />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Password" margin="normal" fullWidth required
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <button type="submit" className="btn btn-outline-success" style={{ marginLeft: 75 }} >Log in</button><br /><br />
                    <Grid container>
                        <Grid item >
                            <a href="/register" variant="body2" className="nav-link" style={{ textDecoration: 'none' }} >
                                Don't have an account? Sign Up
                            </a>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Login;
