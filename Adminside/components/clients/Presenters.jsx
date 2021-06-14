import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Presenter from "./Presenter";
import PresenterEditor from "./PresenterEditor";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Presenters() {
  const [presenters, setPresenters] = useState([]);
  const [presenterEditorOpen, setPresenterEditorOpen] = useState(false);
  const [editPresenterData, setEditPresenterData] = useState(null);

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) setPresenters([]);
    else getPresenters();
  }, [loggedIn]);

  async function getPresenters() {
    const presenterRes = await Axios.get(`http://localhost:5000/presenter/`);
    setPresenters(presenterRes.data);
  }

  function editPresenter(presenterData) {
    setEditPresenterData(presenterData);
    setPresenterEditorOpen(true);
  }

  function renderPresenters() {
    let sortedPresenters = [...presenters];
    sortedPresenters = sortedPresenters.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return sortedPresenters.map((presenter, i) => {
      return (
        <Presenter
          key={i}
          presenter={presenter}
          getPresenters={getPresenters}
          editPresenter={editPresenter}
        />
      );
    });
  }

  return (
    <div className="home">
      {presenterEditorOpen && (
        <PresenterEditor setPresenterEditorOpen={setPresenterEditorOpen}
          getPresenters={getPresenters} editPresenterData={editPresenterData} />
      )}
      {presenters.length > 0 ? renderPresenters() : loggedIn &&
        (<p className="alert alert-warning" role="alert" style={{ marginTop: 40 }}>No presenters have been added yet.</p>)}
      {loggedIn === null && (<div className="no-user-message">
        <h2>Welcome</h2> <Link to="/register">
          Register here</Link> </div>
      )}
    </div>
  );
}

export default Presenters;
