import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import visitors from '../../images/visitors.PNG';
import rides from '../../images/rides.PNG';
import land from '../../images/land.PNG';
import Service from '../Service/Service';
import './Home.css';
import useServices from '../../hooks/useServices';

const Home = () => {
    const [services] = useServices();
    return (
        <div>
            <div>
                <Image width={1000}
                    height={600} src="https://www.gamingscan.com/wp-content/uploads/2021/08/Best-Theme-Park-Games-1200x900.jpg" fluid />
            </div>


            <div className="container all-services">
                <div className="all-service">
                    <h1>Our Rides</h1>
                </div>
                <div className="search-service">
                    <input className="p-2" type="text" />{" "}
                    <button className="btn p-2 btn-primary">Search</button>
                </div>
                <div className="services">
                    <div className="m row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4 my-5">
                        {services?.map((service) => (
                            <Service service={service} key={service._id} ></Service>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={visitors} />
                                <Card.Body>
                                    <Card.Title>Visitors</Card.Title>
                                    <Card.Text>
                                        8,000
                                        +
                                        Visitors every week
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={rides} />
                            <Card.Body>
                                <Card.Title>Rides</Card.Title>
                                <Card.Text>
                                    28
                                    Thrilling Rides
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={land} />
                            <Card.Body>
                                <Card.Title>Land</Card.Title>
                                <Card.Text>
                                    100
                                    Bighas of land
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
                <div className="subscriber  container d-flex  justify-content-center align-items-center rounded-3 my-5" id="subscribs">
                    <div>
                        <h1>LET'S STAY IN TOUCH
                        </h1>
                        <p>Get updates on Awesome park
                        </p>

                        <input type="email" name="" id="" placeholder='Email' />
                        <button className="bike-btn-buy-now
                 ">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;