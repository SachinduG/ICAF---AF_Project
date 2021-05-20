import React, {useState} from 'react';
import axios from "axios";

function ClientForm(){
    const [clientName, setClientName] = useState("");

    async function saveClient(e){
        e.preventDefault();

        try{
            const clientData = {
                name: clientName,
            };
            await axios.post("https://localhost/5000/client/", clientData);
        }catch (err){
            console.error(err);
        }
    }
}
function ClientForm(){
    return (
        <div>
            <form onSubmit={saveClient}>
            <input
                type="text"
                placeholder="Client Name"
                onChange={(e) => {
                    setClientName(e.target.value);
                }}
                value={clientName}
            />
            <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ClientForm;
