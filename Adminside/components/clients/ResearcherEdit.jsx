import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorMessage from "../layout/ErrorMessage";

function ResearcherEdit({ getResearchers, setResearcherEditOpen, editResearcherData }) {
    const [ editFname, setEditFname ] = useState("");
    const [ editLname, setEditLname ] = useState("");
    const [ editEmail, setEditEmail ] = useState("");
    const [ editMobile, setEditMobile ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState(null);

    useEffect(() => {
        if(editResearcherData){
            setEditFname(editResearcherData.fname ? editResearcherData.fname : "");
            setEditLname(editResearcherData.lname ? editResearcherData.lname : "");
            setEditEmail(editResearcherData.email ? editResearcherData.email : "");
            setEditMobile(editResearcherData.mobile ? editResearcherData.mobile : "");
        }
    }, [editResearcherData]);

    async function saveResearcher(e){
        e.preventDefault();

        const researcherData = {
            fname: editFname ? editFname : undefined,
            lname: editLname ? editLname : undefined,
            email: editEmail ? editEmail : undefined,
            mobile: editMobile ? editMobile : undefined,
        };

        try{
            if(!editResearcherData) await axios.post("http://localhost:5000/researcher/", researcherData);
            else
                await axios.put(
                    "http://localhost:5000/researcher/"${editResearcher._id},
                    researcherData
                );
        }catch (err){
            if(err.response){
                if(err.response.data.errorMessage){
                    setErrorMessage(err.response.data.errorMessage);
                }
            }
            return;
        }
        getResearchers();
        closeEdit();
    }
    function closeEdit(){
        setResearcherEditOpen(false);
        setEditFname("");
        setEditLname("");
        setEditEmail("");
        setEditMobile("");
    }

    return(
        <div className="ss">
            {errorMessage && (
                <ErrorMessage
                    message={errorMessage}
                    clear={() => setErrorMessage(null)}
                />
            )}
            <form className="form" onSubmit={saveResearcher}>
                <label htmlFor="editor-1">First Name</label>
                <input
                    id="editor-1"
                    type="text"
                    value={editFname}
                    onChange={(e) => setEditFname(e.target.value)}
                />

                <label htmlFor="editor-2">Last Name</label>
                <input
                    id="editor-2"
                    type="text"
                    value={editLname}
                    onChange={(e) => setEditLname(e.target.value)}
                />

                <label htmlFor="editor-3">Email Address</label>
                <input
                    id="editor-3"
                    type="text"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                />

                <label htmlFor="editor-4">Mobile Address</label>
                <input
                    id="editor-4"
                    type="text"
                    value={editMobile}
                    onChange={(e) => setEditMobile(e.target.value)}
                />

                <button className="btn-success" type="submit">Save</button>
                <button className="btn-secondary" type="button" onClick={closeEdit}>Cancel</button>
            </form>
        </div>
    );
}

export default ResearcherEdit;
