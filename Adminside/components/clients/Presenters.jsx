import React, {useEffect, useState} from 'react';
import PresenterList from "./PresenterList";
import axios from "axios";

function Presenters(){
    const [presenters, setPresenters] = useState([]);

    async function getPresenters(){
        const presentersRes = await axios.get("http://localhost:5000/presenter/");
        setPresenters(presentersRes.data);
    }

    useEffect(() => {
        getPresenters();
    }, []);

    return (
        <div>
            <PresenterList presenters={presenters} />
        </div>
    );
}

export default Presenters;
