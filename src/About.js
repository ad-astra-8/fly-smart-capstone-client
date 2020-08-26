import React from "react";
import Navbar from "./Navbar";



function About() {

        return (
            <div className='section-container'>
                <Navbar className='nav-home'/>
                <section className="about">
                    <div className="presentation-ctn">
                    <h2 className="section-title">About</h2>
                    <p className="presentation">Fly smart will help you organize your trip. It provides you with travel safety checklist guidelines related to COVID 19 pandemic.</p> 
                    <p className="presentation">You can also create your own travel notes or a simple packing list.</p>
                    <p> Follow the guidelines and you will be off to a great trip.</p> 
                    <p>Bon Voyage!</p>           
                    </div>
                </section>
            </div>        
        );
}

export default About;
