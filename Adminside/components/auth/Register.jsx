import React from "react";

function Register() {
    return(
        <div>
            <h1>Register a new account</h1>
            <form>
                <input type="email" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm-Password"/>
                <button type="submit">Register</button>
        </form>
    </div>
    );
}

export default Register;