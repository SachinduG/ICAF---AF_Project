import React from 'react'
import './App.css'
import Router from "./Router";
import axios from "axios"

axios.default.withCredentials = true;

function App(){
    return <><Router/></>;
}

export default App;