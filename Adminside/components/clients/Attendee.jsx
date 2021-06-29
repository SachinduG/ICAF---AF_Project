import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function Attendee({ attendee, getAttendees, editAttendee }) {
    async function deleteAttendee() {
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
                axios.delete(`http://localhost:5000/attendee/${attendee._id}`);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

        getAttendees();
    }


    return (
        <div className="card" style={{ width: 750, marginLeft: 80, marginTop: 30 }}>
            <div className="card-body">
                {attendee.email && <h3 className="card-title">Email Address : {attendee.email}</h3>}
                {attendee.fname && (
                    <p className="text-1">First Name : {attendee.fname}</p>
                )}
                {attendee.lname && (
                    <p className="text-2">Last Name : {attendee.lname}</p>
                )}
                {attendee.contact && (
                    <p className="text-3">Mobile Number : {attendee.contact}</p>
                )}
                {attendee.university && (
                    <p className="text-4">University : {attendee.university}</p>
                )}
                <button className="btn btn-outline-primary" onClick={() => editAttendee(attendee)} style={{ marginRight: 10 }}>Edit</button>
                <button className="btn btn-outline-danger" onClick={deleteAttendee}>Delete</button>
            </div>
        </div>
    );
}

export default Attendee;
