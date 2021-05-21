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

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    }
}));

function Login() {

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
            history.push("/");
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are successfully log in!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Log in to your account</h1>
            <form onSubmit={login}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Email Address"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <LockOpenIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Password"
                                   type="password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   value={password}
                        />
                    </Grid>
                </Grid>

                <button type="submit" className="btn btn-outline-success" >Log in</button>
            </form>
        </div>
    );
}

export default Login;
