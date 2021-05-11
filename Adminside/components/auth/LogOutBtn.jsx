import React, {useContext} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

function LogOutBtn(){
    const {getLoggedIn} = useContext(AuthContext);
    async function logout(){
        await axios.get("http://localhost:5000/auth/logut");

    }

    return (
        <button onClick={logout}>
            Log Out
        </button>
    );

}

export default LogOutBtn;