import React, {useContext} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function LogOutBtn(){
    const classes = useStyles();
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    async function logOut(){
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/");
    }

    return <Button variant="contained" color="secondary" onClick={logOut}>Log Out</Button>;
}

export default LogOutBtn;
