import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <h1 className="font-weight"><center>Welcome to the Admin Dashboard</center></h1>
                <div className="row align-items-center my-5">
                    <div className="col-lg-4">
                        <h1 className="font-weight-light">Home</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h1 className="font-weight-light">Users</h1>
                        <p>Researchers</p>
                        <p>Presenters</p>
                        <p>Attendees</p>
                    </div>
                    <div className="col-lg-4">
                        <h1 className="font-weight-light">Contents</h1>
                        <p>Research Papers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;