import React from 'react';

function PresenterList({ presenters }){
    function renderPresenters() {
        return presenters.map((presenter, i) => {
            return <li key={i}>{presenter.name}</li>;
        });
    }

    return (
        <div>
            <ul>{renderPresenters()}</ul>
        </div>
    );
}

export default PresenterList;
