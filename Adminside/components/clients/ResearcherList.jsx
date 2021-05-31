import React from 'react';
import axios from "axios";

function ResearcherList({ researcher, getResearchers, editResearcher }){
    async function deleteResearcher(){
        if(window.confirm("Do you want to delete this researcher?")) {
            await axios.delete("http://localhost/5000/researcher/${researcher._id}");

            getResearchers();
        }
    }

    return (
        <div className="user">
            {researcher.email && <h2 className="name">{researcher.email}</h2>}
            {researcher.fname && (
                <p className="fname">{researcher.fname}</p>
            )}
            {researcher.lname && (
                <p className="lname">{researcher.lname}</p>
            )}
            {researcher.mobile && (
                <p className="mobile">{researcher.mobile}</p>
            )}
            <button className="btn-edit" onClick={() => editResearcher(researcher)}>Edit</button>
            <button className="btn-delete" onClick={(deleteResearcher)}>Delete</button>
        </div>
    );
}

export default ResearcherList;
