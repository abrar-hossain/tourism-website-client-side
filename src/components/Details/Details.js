import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import { Col, Row } from "react-bootstrap";

const Details = () => {
    const { user } = useAuth();
    const [service, setService] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="my-5">
            <Row>
                <p>Dear sir,<div>
                    <h2>Welcome {user.displayName}</h2>
                    <h6>Email:{user.email}</h6>
                </div></p>
                <h1>You have clicked this item:</h1>
            </Row>
            <Row>
                <Col>
                    <img width="25%" src={service.img} alt="" />
                    <h1>{service.ride}</h1>
                    <h1>Fees: {service.price}$</h1>
                </Col>
                <Col className="p-3">
                    <div className="text-center">
                        <h4>Description</h4>
                        <p>{service.description}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Details;