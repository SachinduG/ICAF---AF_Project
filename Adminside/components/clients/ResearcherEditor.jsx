import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ResearcherEditor({ getResearchers, setResearcherEditorOpen, editResearcherData}) {
    const [editFName, setEditFName] = useState("");
    const [editLName, setEditLName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editMobile, setEditMobile] = useState("");
    const mountedRef = useRef(false);

    // effect just for tracking mounted state
    useEffect(() => {
        mountedRef.current = true
        return () => {
         mountedRef.current = false
        }
    }, []);

    useEffect(() => {
            if (editResearcherData) {
                setEditFName(editResearcherData.fname ? editResearcherData.fname : "");
                setEditLName(editResearcherData.lname ? editResearcherData.lname : "");
                setEditEmail(editResearcherData.email ? editResearcherData.email : "");
                setEditMobile(editResearcherData.mobile ? editResearcherData.mobile : "");
            }
    }, [editResearcherData]);

    async function saveResearcher(e){
        e.preventDefault();

        const researcherData = {
            fname: editFName ? editFName : undefined,
            lname: editLName ? editLName : undefined,
            email: editEmail ? editEmail : undefined,
            mobile: editMobile ? editMobile : undefined,
        };

        try{
            if(!editResearcherData) await axios.post(`http://localhost:5000/researcher/`, researcherData);
            else
                await axios.put(`http://localhost:5000/researcher/${editResearcherData._id}`, researcherData);
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You successfully updated researcher!',
                    showConfirmButton: false,
                    timer: 1500
                })
        }catch (err){
            if(fname.length < 3){
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'First Name must be at least 3 characters!'
                })
            }
            if(lname.length < 3){
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Last Name must be at least 3 characters!'
                })
            }
            if(mobile.length < 10){
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Mobile Number must be at least 10 characters!'
                })
            }else{
                await Swal.file({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please update at least a input field!'
                })
            }
        }

        getResearchers;
        closeEditor();

    }
    function closeEditor(){
        setResearcherEditorOpen(false);
        setEditFName("");
        setEditLName("");
        setEditEmail("");
        setEditMobile("");
    }

    return(
        <div style={{marginTop: 20}}>
            <h3><center>Update Researcher</center></h3>
            <div className = "container">
            <form onSubmit={saveResearcher}>
                <div className="form-group">
                <label>First Name</label>
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
                <label>Last Name</label>
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
                <label>Email Address</label>
                <input
                    id="editor-3"
                    className="form-control"
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    required
                />
                </div>

                
                <div className="form-group">
                <label>Mobile Number</label>
                <input
                    id="editor-4"
                    className="form-control"
                    type="text"
                    value={editMobile}
                    onChange={(e) => setEditMobile(e.target.value)}
                    required
                />
                </div>

                <div className="form-group" style={{marginLeft: 475, marginTop:30}}>
                <button className="btn-success" type="submit" style={{marginRight: 10, marginTop: 20}}>Save</button>  
                    <button className="btn-danger" type="button" onClick={closeEditor}>Cancel</button>
                </div>
                    
            </form>
            </div>
        </div>
    );
}

export default ResearcherEditor;
