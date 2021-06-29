import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";

function Presenter({ presenter, getPresenters, editPresenter }) {
    async function deletePresenter() {
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
                axios.delete(`http://localhost:5000/presenter/${presenter._id}`);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

        getPresenters();
    }

    return (
        <div className="card" style={{ width: 750, marginLeft: 80, marginTop: 30 }}>
            <div className="card-body">
                {presenter.email && <h3 className="card-title">Email Address : {presenter.email}</h3>}
                {presenter.firstName && (
                    <p className="text-1">First Name : {presenter.firstName}</p>
                )}
                {presenter.lastName && (
                    <p className="text-2">Last Name : {presenter.lastName}</p>
                )}
                {presenter.contactNumber && (
                    <p className="text-3">Mobile Number : {presenter.contactNumber}</p>
                )}
                {presenter.username && (
                    <p className="text-3">Username : {presenter.username}</p>
                )}
                {presenter.university && (
                    <p className="text-3">University : {presenter.university}</p>
                )}
                {presenter.department && (
                    <p className="text-3">Department : {presenter.department}</p>
                )}
                <button className="btn btn-outline-primary" onClick={() => editPresenter(presenter)} style={{ marginRight: 10 }}>Edit</button>
                <button className="btn btn-outline-danger" onClick={deletePresenter}>Delete</button>
            </div>
        </div>
    );
}

export default Presenter;
