import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 250,
    },
    paper: {
        margin: theme.spacing(10, 0, 0, -10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#AAB7B8',
        borderRadius: 15,
        width: '130%',
    },
    form: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        width: '90%',
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

    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function register(e) {
        e.preventDefault();
        try {
            const registerData = {
                fname,
                lname,
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/register", registerData);
            await getLoggedIn();
            history.push("/home");
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are successfully sign in!',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (err) {
            if (fname.length < 3) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'First Name must be at least 3 characters!'
                })
            }
            if (lname.length < 3) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Last Name must be at least 3 characters!'
                })
            }
            if (password !== passwordVerify) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter the same password twice!'
                })
            }
            
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" style={{ marginTop: 15 }}>
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
                            <TextField id="password" name="password" label="Password" variant="outlined" fullWidth required
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

                    <button type="submit" className="btn btn-outline-success" style={{ marginLeft: 190, marginTop: 20 }}>Register</button><br /><br />
                    <Grid container justify="center">
                        <Grid item>
                            <a href="/login" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}>
                                Already have an account? Sign in
                            </a>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Register;
