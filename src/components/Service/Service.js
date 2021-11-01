import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { _id, img, ride, price, description } = props.service;
    return (
        <Col Col className="my-3" md={4}>
            <Card style={{ minHeight: "480px" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{ride}</Card.Title>
                    <p>
                        {" "}
                        <b>Fees: {price}$</b>
                        <p>{description}</p>
                    </p>
                    <div>
                        <NavLink to={`/services/${_id}`} className="w-50 btn btn-primary mt-3">
                            View Details
                        </NavLink>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;