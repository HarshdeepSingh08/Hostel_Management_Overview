import React from 'react';
import './home.css';
import homepage from './assets/homepage.png';
import react from './assets/react.png';
import bootstrap from './assets/bootstrap.png';
import nodejs from './assets/nodejs.jpg';
import expressjs from './assets/expressjs.png';
import mysql from './assets/mysql.png';
import cloudinary from './assets/cloudinary.jpg';
import image1 from './assets/img1.png';
import image2 from './assets/img2.png';
import image3 from './assets/img3.png';
import image4 from './assets/img4.png';
import image5 from './assets/img5.png';
import image6 from './assets/img6.png';
import image7 from './assets/img7.png';
import image8 from './assets/img8.png';
import image9 from './assets/img9.png';
import image10 from './assets/img10.png';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="overlay">
                    <h1 className="home-title">Hostel - Management</h1>
                </div>
            </header>

            <div>
                <div className="row">
                    <div className="col-md-12">
                        <section className="home-content">
                            <h2 className="home-overview" style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 'xxx-large', marginBottom: '40px' }}>
                                Platform Overview: Hostel Management Solution
                            </h2>
                            <p className="home-description">
                                Managing hostel-related tasks can be challenging for both students and administrative staff. Students often face
                                difficulties when it comes to securing rooms, raising concerns, or addressing day-to-day issues. On the administrative
                                side, keeping track of room allotments, handling student concerns, and maintaining smooth operations can be overwhelming.
                            </p>
                            <p className="home-description">
                                To streamline these processes, we have developed a comprehensive platform dedicated to hostel management. Our solution
                                simplifies tasks for both students and administrators, ensuring a seamless and efficient experience for all.
                            </p>
                            <ul className="home-description">
                                <li><strong>For Students:</strong> The platform allows students to easily book hostel rooms, raise concerns, and manage
                                    their accommodation-related needs with just a few clicks.</li>
                                <li><strong>For Administrators:</strong> Admin staff can efficiently allocate rooms, manage student requests, and address
                                    concerns in a timely manner, all within a single, user-friendly interface.</li>
                            </ul>

                            <h2 className="home-overview" style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 'xxx-large', marginBottom: '40px', marginTop: '50px' }}>
                                Tech Stack Used
                            </h2>

                            {/* Frontend Section */}
                            <div className="row text-center">
                                <div className="col-md-4">
                                    <img src={react} alt="Frontend Technology 1" className="tech-img" />
                                    <p>React.js</p>
                                </div>
                                <div className="col-md-4">
                                    <img src={bootstrap} alt="Frontend Technology 2" className="tech-img" />
                                    <p>Bootstrap</p>
                                </div>
                                <div className="col-md-4">
                                    <img src={nodejs} alt="Backend Technology 1" className="tech-img" />
                                    <p>Node.js</p>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4">
                                    <img src={expressjs} alt="Backend Technology 2" className="tech-img" />
                                    <p>Express.js</p>
                                </div>
                                <div className="col-md-4">
                                    <img src={mysql} alt="Database Technology 1" className="tech-img" />
                                    <p>MySQL</p>
                                </div>
                                <div className="col-md-4">
                                    <img src={cloudinary} alt="Database Technology 2" className="tech-img" />
                                    <p>Cloudinary for file storage</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* New Section for Glimpse of Project */}
            <div className="glimpse-project-section">
                <h2 className="home-overview" style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 'xxx-large', marginBottom: '40px', marginTop: '50px' }}>
                    Glimpse of Project
                </h2>

                {/* Homepage Image */}
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <img src={homepage} alt="Homepage" className="glimpse-img" />
                        <p>Homepage</p>
                    </div>
                </div>

                {/* Glimpse Images */}
                <div className="row text-center">
                    <div className="col-md-6">
                        <img src={image1} alt="Glimpse 1" className="glimpse-img" />
                        <p>Login Page</p>
                    </div>
                    <div className="col-md-6">
                        <img src={image2} alt="Glimpse 2" className="glimpse-img" />
                        <p>Sign up Page</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <img src={image3} alt="Glimpse 3" className="glimpse-img" />
                        <p>Student Dashboard</p>
                    </div>
                    <div className="col-md-6">
                        <img src={image4} alt="Glimpse 4" className="glimpse-img" />
                        <p>Update Details</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <img src={image5} alt="Glimpse 5" className="glimpse-img" />
                        <p>Admin Dashboard</p>
                    </div>
                    <div className="col-md-6">
                        <img src={image6} alt="Glimpse 6" className="glimpse-img" />
                        <p>Hostel Student Details</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <img src={image7} alt="Glimpse 7" className="glimpse-img" />
                        <p>Before Room Allocation</p>
                    </div>
                    <div className="col-md-6">
                        <img src={image8} alt="Glimpse 8" className="glimpse-img" />
                        <p>After Room Allocation</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <img src={image9} alt="Glimpse 9" className="glimpse-img" />
                        <p>Student DB</p>
                    </div>
                    <div className="col-md-6">
                        <img src={image10} alt="Glimpse 10" className="glimpse-img" />
                        <p>Admin DB</p>
                    </div>
                </div>
            </div>

            <h2 className="home-overview" style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 'xxx-large', marginBottom: '40px', marginTop: '50px' }}>
                    Thanks
                </h2>
        </div>
    );
};

export default Home;
