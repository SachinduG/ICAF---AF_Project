import React from "react";
import NoteIcon from '@material-ui/icons/Note';
import WorkIcon from '@material-ui/icons/Work';
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Home() {
    const classess = useStyles();

    return (
        <div className="home">
            <div className="container">
                <h1 className="font-weight"><center>Welcome to the Admin Dashboard</center></h1>
                <div className="row align-items-center my-6">
                    <div className="col-lg-4">
                        <h1 className="font-weight">Home</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h1 className="font-weight">Clients</h1>
                        <center>
                            <ButtonGroup
                                orientation="vertical"
                                color="primary"
                                aria-label="vertical contained primary button group"
                                variant="text"
                            >
                                <Button><a href="/researcher" style={{ textDecoration: 'none' }}> Researchers</a></Button>
                                <Button><a href="/presenter" style={{ textDecoration: 'none' }}>Presenters</a></Button>
                                <Button><a href="/attendee" style={{ textDecoration: 'none' }}>Attendees</a></Button>
                            </ButtonGroup>
                        </center>
                    </div>
                    <div className="col-lg-4">
                        <h1 className="font-weight">Events</h1>
                        <center>
                            <ButtonGroup
                                orientation="vertical"
                                color="primary"
                                aria-label="vertical contained primary button group"
                                variant="text"
                            >
                                <Button><a href="#" style={{ textDecoration: 'none' }}>Research Papers<NoteIcon /></a></Button>
                                <Button><a href="#" style={{ textDecoration: 'none' }}>Presenters<WorkIcon /></a></Button>
                            </ButtonGroup>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;