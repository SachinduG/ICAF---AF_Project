import React, {useContext} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function LogOutBtn(){
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logOut(){
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/");
        await Swal.fire({
            title: 'Log Out',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    return <button class="btn btn-outline-danger" onClick={logOut}>Log Out</button>;
}

export default LogOutBtn;
