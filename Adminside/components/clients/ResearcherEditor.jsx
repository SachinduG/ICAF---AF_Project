import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ResearcherEditor({ getResearchers, setResearcherEditorOpen, editResearcherData }) {
    const [editFirstName, setEditFirstName] = useState("");
    const [editLastName, setEditLastName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editContactNumber, setEditContactNumber] = useState("");
    const [editUsername, setEditUsername] = useState("");
    const [editUniversity, setEditUniversity] = useState("");
    const [editDepartment, setEditDepartment] = useState("");

    useEffect(() => {
        if (editResearcherData) {
            setEditFirstName(editResearcherData.firstName ? editResearcherData.firstName : "");
            setEditLastName(editResearcherData.lastName ? editResearcherData.lastName : "");
            setEditEmail(editResearcherData.email ? editResearcherData.email : "");
            setEditContactNumber(editResearcherData.contactNumber ? editResearcherData.contactNumber : "");
            setEditUsername(editResearcherData.username ? editResearcherData.username : "");
            setEditUniversity(editResearcherData.university ? editResearcherData.university : "");
            setEditDepartment(editResearcherData.department ? editResearcherData.department : "");
        }
    }, [editResearcherData]);

    async function saveResearcher(e) {
        e.preventDefault();

        const researcherData = {
            firstName: editFirstName ? editFirstName : undefined,
            lastName: editLastName ? editLastName : undefined,
            email: editEmail ? editEmail : undefined,
            contactNumber: editContactNumber ? editContactNumber : undefined,
            username: editUsername ? editUsername : undefined,
            university: editUniversity ? editUniversity : undefined,
            department: editDepartment ? editDepartment : undefined,
        };

        try {
            await axios.put(`http://localhost:5000/researcher/${editResearcherData._id}`, researcherData);
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You successfully updated researcher!',
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
            if (editUsername.length < 3) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'UserName must be at least 3 characters!'
                })
            }

            if (editUniversity.length < 0) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'University cannot be empty!'
                })
            }

            if (editDepartment.length < 0) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Department cannot be empty!'
                })
            }
        }

        getResearchers();
        closeEditor();
    }
    function closeEditor() {
        setResearcherEditorOpen(false);
        setEditFirstName("");
        setEditLastName("");
        setEditEmail("");
        setEditContactNumber("");
        setEditUsername("");
        setEditUniversity("");
        setEditDepartment("");
    }

    return (
        <div style={{ marginTop: 20 }} className="user-editor">
            <h3><center>Update Researcher</center></h3>
            <div className="container">
                <form onSubmit={saveResearcher}>
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
                        <label htmlFor="editor-2">Username</label>
                        <input
                            id="editor-2"
                            className="form-control"
                            type="text"
                            value={editUsername}
                            onChange={(e) => setEditUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-2">University</label>
                        <input
                            id="editor-2"
                            className="form-control"
                            type="text"
                            value={editUniversity}
                            onChange={(e) => setEditUniversity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="editor-2">Department</label>
                        <input
                            id="editor-2"
                            className="form-control"
                            type="text"
                            value={editDepartment}
                            onChange={(e) => setEditDepartment(e.target.value)}
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

export default ResearcherEditor;
