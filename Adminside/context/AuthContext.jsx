import React, {useEffect, useState} from "react";
import axios from "axios";

function AuthContextProvider(){
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn(){
        const loggedIn = await axios.get("https://localhost:5000/auth");
        setLoggedIn(loggedIn.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);
    return <></>

};

export default AuthContextProvider;