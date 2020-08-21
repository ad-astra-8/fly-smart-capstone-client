import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from './services/token-service.js';



class Navbar extends Component {


  logOutClick = () => {
    TokenService.clearAuthToken()
    TokenService.getUserId = (id) => {
    }

    window.location = '/'
  }

  render() {

    return (
      <header className="Navbar">
        <nav>
          <ul className="nav-container">            
            <NavLink to="/homepage"><li className="nav-link">Home</li></NavLink>
            <NavLink to="/checklist"><li className="nav-link">Check</li></NavLink>
            <NavLink to="/my-notes"><li className="nav-link">List</li></NavLink>
            <a href="https://airportguide.com/search/airport-search/" target='_blank' rel="noopener noreferrer" ><li className="nav-link">Airports</li></a>
            <NavLink to="/" onClick={this.logOutClick} ><li className="nav-link" href="#log out"><i className="fa fa-sign-out" aria-hidden="true"></i></li></NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
