import React, {useEffect, useState} from 'react';
import ClientForm from "./ClientForm";

function Client(){
    const [clients, setClients] = useState([]);

    async function getClients(){
        const clientsRes = await axios.get("https://localhost:5000/client/");
        setClients(clientsRes.data);
    }

    useEffect(() =>{
        getClients()
    }, []);
}
function ClientList(){
    return (
        <div>
            <ul>
                <ClientForm/>
                <ClientList/>
            </ul>
        </div>
    );
};

export default ClientList;
