import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppTwoTone';
import { Button } from "@material-ui/core";

function LogOutBtn() {
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/login");
        await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Log Out',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return <Button variant="contained" color="secondary" style={{ marginLeft: 'auto' }} onClick={logOut}>Log Out<ExitToAppRoundedIcon /></Button>;
}

export default LogOutBtn;
