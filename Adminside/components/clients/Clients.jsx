import React, {useEffect, useState} from 'react';
import ClientForm from "./ClientForm";
import ClientList from "./ClientList";
import axios from "../../dist/index.63f10152";

function Clients(){
    const [clients, setClients] = useState([]);

    async function getClients(){
        const clientsRes = await axios.get("https://localhost:5000/client/");
        setClients(clientsRes.data);
    }

    useEffect(() =>{
        getClients()
    }, []);
}

function Clients(){
    return (
        <div>
            <ClientForm/>
            <ClientList clients={clients} />
        </div>
    );
};

export default Clients;
