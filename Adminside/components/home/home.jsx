import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Attendee from "../clients/Attendee";
import AuthContext from "../../context/AuthContext";

function Home() {
    const [attendees, setAttendees] = useState([]);

  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!loggedIn) setAttendees([]);
    else getAttendees();
  }, [loggedIn]);

  async function getAttendees() {
    const attendeesRes = await Axios.get(`http://localhost:5000/attendee/`);
    setAttendees(attendeesRes.data);
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
        />
      );
    });
  }

    return (
        <div className="home">
            <div className="container">
                <h1 className="font-weight"><center>Welcome to the Admin Dashboard</center></h1>
                <div className="row align-items-center my-5">
                    <div className="col-lg-4">
                        <h1 className="font-weight-light">Home</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h1 className="font-weight-light">Users</h1>
                        <p>Researchers</p>
                        <p>Presenters</p>
                        <p>Attendees</p>
                            {attendees.length > 0 ? renderAttendees() : loggedIn &&
                            (<p className="alert alert-warning" role="alert" style={{ marginTop: 40 }}>No attendees have been added yet.</p>)}
                    </div>
                    <div className="col-lg-4">
                        <h1 className="font-weight-light">Contents</h1>
                        <p>Research Papers</p>
                        <p>Workshops</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;