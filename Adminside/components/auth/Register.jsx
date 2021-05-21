import React, {useContext, useState} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
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
        <div>
            <h1>Register a new account</h1>
            <form onSubmit={register} className={classes.root}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" required
                           type="text"
                           onChange={(e) => setFname(e.target.value)}
                           value={fname}
                />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" required
                           type="text"
                           onChange={(e) => setLname(e.target.value)}
                           value={lname}
                />
                <TextField id="outlined-basic" label="Email Address" variant="outlined" required
                           type="email"
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                />
                <TextField id="outlined-basic" label="Password" variant="outlined" required
                           type="password"
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                />
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" required
                           type="password"
                           onChange={(e) => setPasswordVerify(e.target.value)}
                           value={passwordVerify}
                />
                <button type="submit" className="btn btn-outline-info">Register</button>
        </form>
    </div>
    );
}

export default Register;
