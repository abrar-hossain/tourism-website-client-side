import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services] = useServices();
    return (
        <div className="container all-services mt-5">
            <div className="all-service">
                <h1>Our Services</h1>
            </div>
            <div className="search-service">
                <input className="p-2" type="text" />{" "}
                <button className="btn p-2 btn-primary">Search</button>
            </div>
            <div className="services">
                <div className="m row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4 my-5">
                    {services?.map((service) => (
                        <Service service={service} key={service.key}></Service>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;