import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AttendeeEditor({ getAttendees, setAttendeeEditorOpen, editAttendeeData }) {
    const [editFName, setEditFName] = useState("");
    const [editLName, setEditLName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editContact, setEditContact] = useState("");
    const [editUniversity, setEditUniversity] = useState("");

    useEffect(() => {
        if (editAttendeeData) {
            setEditFName(editAttendeeData.fname ? editAttendeeData.fname : "");
            setEditLName(editAttendeeData.lname ? editAttendeeData.lname : "");
            setEditEmail(editAttendeeData.email ? editAttendeeData.email : "");
            setEditContact(editAttendeeData.contact ? editAttendeeData.contact : "");
            setEditUniversity(editAttendeeData.university ? editAttendeeData.university : "");
        }
    }, [editAttendeeData]);

    async function saveAttendee(e) {
        e.preventDefault();

        const attendeeData = {
            fname: editFName ? editFName : undefined,
            lname: editLName ? editLName : undefined,
            email: editEmail ? editEmail : undefined,
            contact: editContact ? editContact : undefined,
            university: editUniversity ? editUniversity : undefined
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
            if (editFName.length < 3) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'First Name must be at least 3 characters!'
                })
            }
            if (editLName.length < 3) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Last Name must be at least 3 characters!'
                })
            }
            if (editContact.length < 10) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Mobile Number must be at least 10 characters!'
                })
            }
            if (editUniversity.length < 0) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'University must not be empty!!'
                })
            }
        }

        getAttendees();
        closeEditor();
    }
    function closeEditor() {
        setAttendeeEditorOpen(false);
        setEditFName("");
        setEditLName("");
        setEditEmail("");
        setEditContact("");
        setEditUniversity("");
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
                            value={editFName}
                            onChange={(e) => setEditFName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-2">Last Name</label>
                        <input
                            id="editor-2"
                            className="form-control"
                            type="text"
                            value={editLName}
                            onChange={(e) => setEditLName(e.target.value)}
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
                            value={editContact}
                            onChange={(e) => setEditContact(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-4">University</label>
                        <input
                            id="editor-5"
                            className="form-control"
                            type="text"
                            value={editUniversity}
                            onChange={(e) => setEditUniversity(e.target.value)}
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
