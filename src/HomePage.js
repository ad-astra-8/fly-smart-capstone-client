import React, { Component } from "react";
import Navbar from "./Navbar";
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
            <div>
            <Navbar />
            <section className="homepage">

                <h2 className="section-title">Homepage</h2>
                <p>Fly smart will help you organize your trip better and be a saavy traveler during the pandemic. Follow the guidelines and you will be off to a great trip.</p>

                <div className="presentation">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="external resources">Click here</a>
                    <p className="web-resources">There is a problem with the link</p>
                </div>
            </section>
            </div>        
        );
    }
}

export default HomePage;
