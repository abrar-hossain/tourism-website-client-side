import React from "react";
import './Footer.css'

const Footer = () => {
    return (

        <div style={{ backgroundColor: "#0063B2FF", color: "white" }}>
            <div className='footer'>
                <div>
                    <p>Hours</p>
                    <p>Friday-Saturday <br />
                        (9:30 am - 7:00 pm)</p>
                    <p>Monday-Thursday
                        <br />
                        (10:00 am - 7:00 pm)</p>
                </div>
                <div>
                    <p>Contact</p>
                    <p>Info Desk</p>
                    <p>info@awesomepark.com</p>
                    <p>01755-646-816</p>
                    <p>Call Center</p>
                    <p>01713-657-894</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>Park Location</p>
                    <p> Baroipara, <br /> Nabinagar - Chandra Highway, <br /> Savar, Dhaka, <br /> Bangladesh.</p>

                    <p>Corporate Location</p>
                    <p>House: 1028 (4th Floor), <br /> Road: 09, Avenue: 09, <br /> Mirpur DOHS, <br /> Dhaka-1216.</p>


                </div>
                <div>
                    <h4>Subscribe</h4>
                    <br />
                    <h6>Email</h6>
                    <div className="search-service">
                        <input className="p-2" type="text" />{" "}
                        <button className="btn p-2 btn-dark">Search</button>
                    </div>
                </div>
            </div>
            <hr />
            <div> <h5 className="text-center pb-5">Copyright © 2021  All rights reserved</h5>
            </div>


        </div>
    );
};

export default Footer;