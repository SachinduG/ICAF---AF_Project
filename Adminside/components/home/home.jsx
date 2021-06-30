import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';

function Home() {
    return (
        <div className="home">
            <div className="container">
                <h1 className="font-weight"><center>Welcome to the Admin Dashboard</center></h1>
                <div>
                    <Row>
                        <Col xs="12" md="4">
                            <Feeds />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4">
                            <h1 className="font-weight">Clients</h1>
                            <h6 className="font-weight-light">Researchers</h6>
                            <h6 className="font-weight-light">Presenters</h6>
                            <h6 className="font-weight-light">Attendees</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="4">
                            <h1 className="font-weight">Events</h1>
                            <h6 className="font-weight-light">Researcher Papers</h6>
                            <h6 className="font-weight-light">Workshops</h6>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Home;