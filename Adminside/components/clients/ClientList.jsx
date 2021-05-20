import React from 'react';

function ClientList({ clients }){
    function renderClient(){
        return clients.map((client) => {
            return <li>{clients.name}</li>
                return <li key={client.name}></li>;
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
