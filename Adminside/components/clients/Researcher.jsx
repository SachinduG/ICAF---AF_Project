import React from 'react';
import axios from "axios";

function Researcher({ researcher, getResearchers, editResearcher }) {
    async function deleteResearcher(){
        if(window.confirm("Do you want to delete this researcher?")){
            await axios.delete(`http://localhost:5000/researcher/delete/${researcher._id}`);

            getResearchers;
        }
    }

    return (
        <div className="user">
            {researcher.email && <h2 className="email">{researcher.email}</h2>}
            {researcher.fname && (
                <p className="text-1">{researcher.fname}</p>
            )}
            {researcher.lname && (
                <p className="text-2">{researcher.lname}</p>
            )}
            {researcher.mobile && (
                <p className=""
            )}
        </div>
    )
}
