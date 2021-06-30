import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AttendeeEditor({ getAttendees, setAttendeeEditorOpen, editAttendeeData }) {
    const [editFirstName, setEditFirstName] = useState("");
    const [editLastName, setEditLastName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editContactNumber, setEditContactNumber] = useState("");
    const [editUsername, setEditUsername] = useState("");

    useEffect(() => {
        if (editAttendeeData) {
            setEditFirstName(editAttendeeData.firstName ? editAttendeeData.firstName : "");
            setEditLastName(editAttendeeData.lastName ? editAttendeeData.lastName : "");
            setEditEmail(editAttendeeData.email ? editAttendeeData.email : "");
            setEditContactNumber(editAttendeeData.contactNumber ? editAttendeeData.contactNumber : "");
            setEditUsername(editAttendeeData.username ? editAttendeeData.username : "");
        }
    }, [editAttendeeData]);

    async function saveAttendee(e) {
        e.preventDefault();

        const attendeeData = {
            firstName: editFirstName ? editFirstName : undefined,
            lastName: editLastName ? editLastName : undefined,
            email: editEmail ? editEmail : undefined,
            contact: editContactNumber ? editContactNumber : undefined,
            username: editUsername ? editUsername : undefined,
        };

        try {
            await axios.put(`http://localhost:5000/attendee/${editAttendeeData._id}`, attendeeData);
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You successfully updated attendee!',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (err) {
            if (editFirstName.length < 3) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'First Name must be at least 3 characters!'
                })
            }
            if (editLastName.length < 3) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Last Name must be at least 3 characters!'
                })
            }
            if (editContactNumber.length < 10) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Mobile Number must be at least 10 characters!'
                })
            }
            if (editUsername.length < 0) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'username must not be empty!!'
                })
            }
        }

        getAttendees();
        closeEditor();
    }
    function closeEditor() {
        setAttendeeEditorOpen(false);
        setEditFirstName("");
        setEditLastName("");
        setEditEmail("");
        setEditContactNumber("");
        setEditUsername("");
    }

    return (
        <div style={{ marginTop: 20 }} className="user-editor">
            <h3><center>Update Attendee</center></h3>
            <div className="container">
                <form onSubmit={saveAttendee}>
                    <div className="form-group">
                        <label htmlFor="editor-1">First Name</label>
                        <input
                            id="editor-1"
                            className="form-control"
                            type="text"
                            value={editFirstName}
                            onChange={(e) => setEditFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-2">Last Name</label>
                        <input
                            id="editor-2"
                            className="form-control"
                            type="text"
                            value={editLastName}
                            onChange={(e) => setEditLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-3">Email Address</label>
                        <input
                            id="editor-3"
                            className="form-control"
                            type="email"
                            value={editEmail}
                            onChange={(e) => setEditEmail(e.target.value)}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-4">Mobile Number</label>
                        <input
                            id="editor-4"
                            className="form-control"
                            type="text"
                            value={editContactNumber}
                            onChange={(e) => setEditContactNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-5">Username</label>
                        <input
                            id="editor-5"
                            className="form-control"
                            type="text"
                            value={editUsername}
                            onChange={(e) => setEditUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group" style={{ marginLeft: 475, marginTop: 30 }}>
                        <button className="btn btn-outline-success" type="submit" style={{ marginRight: 10 }}>Save</button>
                        <button className="btn btn-outline-warning" type="button" onClick={closeEditor}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AttendeeEditor;
