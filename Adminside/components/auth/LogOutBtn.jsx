import React, {useContext} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppTwoTone';

function LogOutBtn(){
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logOut(){
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/");
        await Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Log Out',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return <button className="btn btn-outline-danger" onClick={logOut}>Log Out<ExitToAppRoundedIcon /></button>;
}

export default LogOutBtn;
