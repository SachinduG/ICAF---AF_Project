import React from 'react'
import './App.css'
import Router from "./Router";
import axios from "axios"
import { AuthContextProvider } from "./context/AuthContext";

axios.default.withCredentials = true;

function App(){
    return (
        <AuthContextProvider>
            <Router/>
        </AuthContextProvider>
    );
}

export default App;