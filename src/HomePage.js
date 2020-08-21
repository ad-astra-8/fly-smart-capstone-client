import React, { Component } from "react";
import Navbar from "./Navbar";
import ReactPlayer from 'react-player'
// import TokenService from './services/token-service.js';



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    render() {
        // let User_Id = TokenService.getUserId();
        return (
            <div className='section-container'>
                <Navbar className='nav-home'/>
                <section className="homepage">
                    <div className="presentation-ctn">
                    <h2 className="section-title">Homepage</h2>
                    <p className="presentation">Fly smart will help you organize your trip better and be a saavy traveler during the pandemic. Follow the guidelines and you will be off to a great trip.</p>
                    </div>
                    <h3><i className="fa fa-hand-paper-o" aria-hidden="true"></i> During your trip, take steps to protect yourself and others from COVID-19: </h3>
                    <p>-Wear a mask to keep your nose and mouth covered when in public settings.</p>
                    <p>-Avoid close contact by staying at least 6 feet (about 2 arms’ length) from anyone who is not from your household.</p>
                    <p>-Wash your hands often or use hand sanitizer (with at least 60% alcohol).</p>
                    <p>-Avoid contact with anyone who is sick.</p>
                    <p>-Avoid touching your eyes, nose, and mouth.</p>
                    <ReactPlayer className='reactplayer' url='https://youtu.be/u2qCGsWoRSc' width='250px' height='200px'  alt='travel guidelines video' />
                    <p >More about traveling during pandemic: <a className="web-resources" 
                    href="https://www.travelandleisure.com/airlines-airports/tsa-airport-security-coronavirus-hand-sanitizer-rules" 
                    target='_blank' rel="noopener noreferrer" 
                   >The TSA Has New Rules for Travelers Passing Through Airport Security (Video)</a>
                    </p>
            </section>
            </div>        
        );
    }
}

export default HomePage;
