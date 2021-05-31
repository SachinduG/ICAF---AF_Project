import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import ResearcherEdit from "./ResearcherEdit";
import ResearcherList from "./ResearcherList";
import Link from "@material-ui/core/Link";

function Researchers(){
    const [researchers, setResearchers] = useState([]);
    const [researcherEditOpen, setResearcherEditOpen] = useState(false);
    const [editResearcherData, setEditResearcherData] = useState(null);

    const { loggedIn } = useContext(AuthContext);

    useEffect(() => {
        if(!loggedIn) setResearchers([]);
        else getResearchers();
    }, [loggedIn]);

    async function getResearchers(){
        const researchersRes = await axios.get("http://localhost:5000/researcher/");
        setResearchers(researchersRes.data);
    }

    function editResearcher(researcherData){
        setEditResearcherData(researcherData);
        setResearcherEditOpen(true);
    }

    function renderResearchers(){
        let sortedResearchers = [...researchers];
        sortedResearchers = sortedResearchers.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        return sortedResearchers.map((researcher, i) => {
            return (
                <ResearcherList
                    key={i}
                    researcher={researcher}
                    getResearchers={getResearchers}
                    editResearcher={editResearcher}
                />
            );
        });
    }

    return (
        <div className="home" style={{marginTop: 100}}>
            {!researcherEditOpen && loggedIn && (
                <button className="btn-editor-toggle" onClick={() =>
                    setResearcherEditOpen(true)}>Add Researcher</button>
            )}
            {researcherEditOpen && (
                <ResearcherEdit
                    setResearcherEditOpen={setResearcherEditOpen}
                    getResearchers={getResearchers}
                    editResearcherData={editResearcherData}
                />
            )}
            {researchers.length > 0 ? renderResearchers() : loggedIn && (
                <p className="no-msg">No researchers have been added yet.</p>
            )}
            {loggedIn === null && ( <div className="no-user-message">
                    <h2>Welcome to Admin</h2> <Link to="/register">
                    Register here</Link> </div>
            )}
        </div>
    );
}

export default Researchers;
