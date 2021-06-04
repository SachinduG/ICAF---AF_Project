import React, {useEffect, useState} from "react";
import axios from "axios";

function ResearcherEditor({ getResearchers, setResearcherEditorOpen, editResearcherData}) {
    const [editFName, setEditFName] = useState("");
    const [editLName, setEditLName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editMobile, setEditMobile] = useState("");

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
        }catch (err){
            return;
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
        <div className="user-editor">
            <form className="form" onSubmit={saveResearcher}>
                <label htmlFor="editor-1">First Name</label>
                <input
                    id="editor-1"
                    type="text"
                    value={editFName}
                    onChange={(e) => setEditFName(e.target.value)}
                />

                <label htmlFor="editor-2">Last Name</label>
                <input
                    id="editor-2"
                    type="text"
                    value={editLName}
                    onChange={(e) => setEditLName(e.target.value)}
                />

                <label htmlFor="editor-3">Email Address</label>
                <input
                    id="editor-3"
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                />

                <label htmlFor="editor-4">Mobile Number</label>
                <input
                    id="editor-4"
                    type="text"
                    value={editMobile}
                    onChange={(e) => setEditMobile(e.target.value)}
                />

                <button className="btn-save" type="submit">Save</button>
                <button className="btn-cancel" type="button" onClick={closeEditor}>Cancel</button>
            </form>
        </div>
    );
}

export default ResearcherEditor;
