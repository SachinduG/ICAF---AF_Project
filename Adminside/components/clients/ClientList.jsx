import React from 'react';

function ClientList({ clients }){
    function renderClients() {
        return clients.map((client, i) => {
            return <li key={i}>{client.name}</li>;
        });
    }

    return (
        <div>
            <ul>{renderClients()}</ul>
        </div>
    );
}

export default ClientList;
