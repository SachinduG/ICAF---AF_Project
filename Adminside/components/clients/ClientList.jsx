import React from 'react';

function ClientList({ clients }){
    function renderClient() {
        return clients.map((client, i) => {
            return <li key={i}>{client.name}</li>;
        });
    }

    return (
        <div>
            <ul>
                {renderClient()}
            </ul>
        </div>
    );
}

export default ClientList;
