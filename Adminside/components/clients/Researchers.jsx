import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Researcher from "./Researcher";
import ResearcherEditor from "./ResearcherEditor";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const [researchers, setResearchers] = useState([]);
  const [researcherEditorOpen, setResearcherEditorOpen] = useState(false);
  const [editResearcherData, setEditResearcherData] = useState(null);

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) setResearchers([]);
    else getResearchers();
  }, [loggedIn]);

  async function getResearchers() {
    const snippetsRes = await Axios.get(`http://localhost:5000/researcher/`);
    setResearchers(snippetsRes.data);
  }

  function editResearcher(researcherData) {
    setEditResearcherData(researcherData);
    setResearcherEditorOpen(true);
  }

  function renderResearchers() {
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

  return (
    <div className="home">
      {!researcherEditorOpen && loggedIn && (
        <button className="btn-editor-toggle" onClick={() =>
            setResearcherEditorOpen(true)}>Add Researcher</button>
      )}
      {researcherEditorOpen && (
        <ResearcherEditor setResearcherEditorOpen={setResearcherEditorOpen}
         getResearchers={getResearchers} editResearcherData={editResearcherData}/>
      )}
      {researchers.length > 0 ? renderResearchers() : loggedIn && 
      ( <p className="no-snippets-msg">No researchers have been added yet.</p> )}
      {loggedIn === null && ( <div className="no-user-message"> 
      <h2>Welcome</h2> <Link to="/register">
        Register here</Link> </div>
      )}
    </div>
  );
}

export default Home;
