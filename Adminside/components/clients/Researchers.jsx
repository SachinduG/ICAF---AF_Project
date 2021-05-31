import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Researcher from "./Researcher";
import ResearcherEditor from "./"

function Researchers(){
    const [researchers, setResearchers] = useState([]);
    const [researcherEditorOpen, setResearcherEditorOpen] = useState(false);
    const [editResearcherData, setEditResearcherData] =useState(null);

    const { loggedIn } = useContext(AuthContext);

    useEffect(() => {
        if(!loggedIn) setResearchers([]);
        else getResearchers();
    }, [loggedIn]);

    async function getResearchers(){
        const researcherRes = await axios.get(`http://localhost:5000/researcher/`);
        setResearchers(researcherRes.data);
    }

    function editResearcher(researcherData) {
        setEditResearcherData(researcherData);
        setResearcherEditorOpen(true);
    }

    function renderResearchers(){
        let sortedResearchers = [...researchers];
        sortedResearchers = sortedResearchers.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        return sortedResearchers.map((researcher, i) => {
            return (
                <Researcher
                    key={i}
                    researcher={researcher}
                    getResearchers={getResearchers}
                    editResearcher={editResearcher}
                    />
            );
        });
    }

    return(
        <div className = "home">
            {!researcherEditorOpen && loggedIn && (
                <button className="btn-editor-toggle" onClick={() =>
                    setResearcherEditorOpen(true)}>Add researcher</button>
            )}
            {researcherEditorOpen && (
                <ResearcherEditor setResearcherEditorOpen={setResearcherOpen}
                                  getResearhcers={getResearchers} editResearcherData={editResearcherData}/>
            )}
            {researchers.length > 0 ? renderResearchers() : loggedIn &&
                ( <p className="no-users-msg">No researchers have been added yet.</p>)}
            {loggedIn === null && ( <div className="no-user-message">
                    <Link to="/">Login here</Link></div>
            )}
        </div>
    );
}

export default Researchers;
