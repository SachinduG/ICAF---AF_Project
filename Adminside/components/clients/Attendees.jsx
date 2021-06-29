import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Attendee from "./Attendee";
import AttendeeEditor from "./AttendeeEditor";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Attendees() {
  const [attendees, setAttendees] = useState([]);
  const [attendeeEditorOpen, setAttendeeEditorOpen] = useState(false);
  const [editAttendeeData, setEditAttendeeData] = useState(null);

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) setAttendees([]);
    else getAttendees();
  }, [loggedIn]);

  async function getAttendees() {
    const attendeesRes = await Axios.get(`http://localhost:5000/attendee/`);
    setAttendees(attendeesRes.data);
  }

  function editAttendee(attendeeData) {
    setEditAttendeeData(attendeeData);
    setAttendeeEditorOpen(true);
  }

  function renderAttendees() {
    let sortedAttendees = [...attendees];
    sortedAttendees = sortedAttendees.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return sortedAttendees.map((attendee, i) => {
      return (
        <Attendee
          key={i}
          attendee={attendee}
          getAttendees={getAttendees}
          editAttendee={editAttendee}
        />
      );
    });
  }

  return (
    <div className="home">
      {attendeeEditorOpen && (
        <AttendeeEditor setAttendeeEditorOpen={setAttendeeEditorOpen}
          getAttendees={getAttendees} editAttendeeData={editAttendeeData} />
      )}
      {attendees.length > 0 ? renderAttendees() : loggedIn &&
        (<p className="alert alert-warning" role="alert" style={{ marginTop: 40 }}>No attendees have been added yet.</p>)}
      {loggedIn === null && (<div className="no-user-message">
        <h2>Welcome</h2> <Link to="/register">
          Register here</Link> </div>
      )}
    </div>
  );
}

export default Attendees;
