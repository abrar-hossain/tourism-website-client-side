import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    /* const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    } */
    return (
        <div>
            <h1>No order yet</h1>
            {/* <h2>My Order</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.ride}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            } */}
        </div>
    );
};

export default MyOrder;