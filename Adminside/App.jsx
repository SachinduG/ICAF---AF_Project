import React from "react";
import Router from "./Router";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';

axios.defaults.withCredentials = true;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
