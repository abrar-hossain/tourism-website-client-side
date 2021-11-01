import React from 'react';
import { NavLink } from "react-router-dom";
import {
    Container, Nav,
    Navbar as Appbar,
    Stack
} from "react-bootstrap";
import useAuth from '../../hooks/useAuth';

const Navbars = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Appbar bg="dark" variant="dark" expand="lg">
                <h4 className="text-danger bg-dark">Awesome Park</h4>
                <Container fluid>
                    <Appbar.Toggle aria-controls="navbarScroll" />
                    <Appbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Stack direction="horizontal" gap={3} className='nav'>
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: 'none'
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: 'none',
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Rides
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Contact
                                </NavLink>
                                {user.email && <span style={{ color: 'white' }}>hello {user.displayName}</span>}
                                {user.email &&
                                    <NavLink
                                        to="/order"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                        }}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        MyOrder
                                    </NavLink>
                                }
                                {user.email &&
                                    <NavLink
                                        to="/manageOrder"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                        }}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Manage All Orders
                                    </NavLink>
                                }
                                {user.email &&
                                    <NavLink
                                        to="/newService"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                        }}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        Add A New Service
                                    </NavLink>
                                }
                                {user.email ? <button onClick={logOut}>LogOut</button> :
                                    <NavLink to="/login" style={{ textDecoration: 'none' }}>Login</NavLink>}
                            </Stack>
                        </Nav>
                    </Appbar.Collapse>
                </Container>
            </Appbar>
        </div>
    );
};

export default Navbars;