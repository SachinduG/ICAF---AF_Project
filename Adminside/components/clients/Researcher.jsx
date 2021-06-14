import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function Researcher({ researcher, getResearchers, editResearcher }) {
    async function deleteResearcher() {
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
                getResearchers();
            }
        })


    }

    return (
        <div className="card mb-3" style={{ width: 750, marginLeft: 80, marginTop: 30 }}>
            <div className="card-body p-3">
                {researcher.email && <h3 className="card-title">Email Address : {researcher.email}</h3>}
                {researcher.fname && (
                    <p className="text-1">First Name : {researcher.fname}</p>
                )}
                {researcher.lname && (
                    <p className="text-2">Last Name : {researcher.lname}</p>
                )}
                {researcher.mobile && (
                    <p className="text-3">Mobile Number : {researcher.mobile}</p>
                )}
                <button className="btn btn-outline-primary" onClick={() => editResearcher(researcher)} style={{ marginRight: 10 }}>Edit</button>
                <button className="btn btn-outline-danger" onClick={deleteResearcher}>Delete</button>
            </div>
        </div>
    );
}

export default Researcher;
