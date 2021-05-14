import React, {useContext, useState} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function register(e){
        e.preventDefault();
        try{
            const registerData = {
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/", registerData);
            await getLoggedIn();
            history.push("/");

        }catch (err){
            console.error(err);
        }
    }

    return(
        <div>
            <h1>Register a new account</h1>
            <form onSubmit={register}>
                <input type="email"
                       placeholder="Email Address"
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}
                />
                <input type="password"
                       placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                />
                <input type="password"
                       placeholder="Confirm-Password"
                       onChange={(e) => setPasswordVerify(e.target.value)}
                       value={passwordVerify}
                />
                <button type="submit">Register</button>
        </form>
    </div>
    );
}

export default Register;
