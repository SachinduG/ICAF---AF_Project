import React, {useEffect, useState} from 'react';
import AttendeeList from "./AttendeeList";
import axios from "axios";

function Attendees(){
    const [attendees, setAttendees] = useState([]);

    async function getAttendees(){
        const attendeesRes = await axios.get("http://localhost:5000/attendee/");
        setAttendees(attendeesRes.data);
    }

    useEffect(() => {
        getAttendees();
    }, []);

    return (
        <div>
            <AttendeeList attendees={attendees} />
        </div>
    );
}

export default Attendees;
