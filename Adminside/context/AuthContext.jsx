import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props){
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn(){
        const loggedIn = await axios.get("https://localhost:5000/auth/loggedIn");
        setLoggedIn(loggedIn.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return (
        <AuthContextProvider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </AuthContextProvider>
    );
}

export default AuthContext;
export { AuthContextProvider };