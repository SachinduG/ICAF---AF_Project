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
                {attendee.firstName && (
                    <p className="text-1">First Name : {attendee.firstName}</p>
                )}
                {attendee.lastName && (
                    <p className="text-2">Last Name : {attendee.lastName}</p>
                )}
                {attendee.contactNumber && (
                    <p className="text-3">Mobile Number : {attendee.contactNumber}</p>
                )}
                {attendee.username && (
                    <p className="text-4">Username : {attendee.username}</p>
                )}
                <button className="btn btn-outline-primary" onClick={() => editAttendee(attendee)} style={{ marginRight: 10 }}>Edit</button>
                <button className="btn btn-outline-danger" onClick={deleteAttendee}>Delete</button>
            </div>
        </div>
    );
}

export default Attendee;
