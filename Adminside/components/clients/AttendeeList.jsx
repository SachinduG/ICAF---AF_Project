import React from 'react';

function AttendeeList({ attendees }){
    function renderAttendees() {
        return attendees.map((attendee, i) => {
            return <li key={i}>{attendee.name}</li>;
        });
    }

    return (
        <div>
            <ul>{renderAttendees()}</ul>
        </div>
    );
}

export default AttendeeList;
