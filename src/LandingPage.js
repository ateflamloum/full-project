import React from 'react';
import './index.css'; 
import videoFile from "./assets/1.mp4"
import logo from './assets/e4469451604547fca4947adbfa67d321__1_-removebg-preview.png'

function LandingPage() {
    return (
        <div className="main">
            <video autoPlay loop id="video" playsInline>
                <source src={videoFile} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="navbar">
                <div className="logo"> <img
                        src={logo} // Use your imported logo as the source
                        width="250"
                        height="60"
                        className="d-inline-block align-top"
                        alt="My Brand"/>
                        </div>
                
            </div>
            <div className="heading">
                <h1 className="head">WELCOME TO OUR <span>WEBSITE</span></h1>
                <h3>  
                    {' '}
                </h3>
                <h3 className="sub">you can find the perfect model for your project here</h3>
                <div className="btns">
                    <a className="btn1" href="#">Sign In</a>
                    <a className="btn2" href="#">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
