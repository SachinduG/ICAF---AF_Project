import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(){
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn(){
        const loggedIn = await axios.get("https://localhost:5000/auth");
        setLoggedIn(loggedIn.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return <AuthContextProvider value={loggedIn}>

    </AuthContextProvider>;

};

export default AuthContextProvider;