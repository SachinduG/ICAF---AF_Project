import React from 'react';
import axios from "axios";

function Researcher({ researcher, getResearchers, editResearcher }) {
    async function deleteResearcher(){
        if(window.confirm("Do you want to delete this researcher?")){
            await axios.delete(`http://localhost:5000/researcher/${researcher._id}`);

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
                <p className="text-3">{researcher.mobile}</p>
            )}
            <button className="btn-edit" onClick={() => editResearcher(researcher)}>Edit</button>
            <button className="btn-delete" onClick={deleteResearcher}>Delete</button>
        </div>
    );
}

export default Researcher;
