import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import "./user.css";

function Researcher({ researcher, getResearchers, editResearcher }) {
    async function deleteResearcher(){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/researcher/${researcher._id}`);
                Swal.fire(  
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
          })
            
        getResearchers;
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
