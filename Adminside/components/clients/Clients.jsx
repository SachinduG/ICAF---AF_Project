import React, {useEffect, useState} from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";
import axios from "axios";

function Clients(){
    const [clients, setClients] = useState([]);

    async function getClients(){
        const clientsRes = await axios.get("http://localhost:5000/client/");
        setClients(clientsRes.data);
    }

    useEffect(() =>{
        getClients()
    }, []);

    return (
        <div>
            <ClientForm getClients={getClients}/>
            <ClientList clients={clients} />
        </div>
    );
}

export default Clients;
