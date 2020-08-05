import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
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
        {/* <nav>
          <ul className="nav-container">
            <NavLink to="/homePage" className="nav-link"><li>Home</li></NavLink>
            <NavLink to="/about" className="nav-link"><li>About</li></NavLink>
            <NavLink to="/search-recipes" className="nav-link"><li>Recipes</li></NavLink>
            <NavLink to="/forum" className="nav-link"><li>Forum</li></NavLink>
            <NavLink to="/account" className="nav-link"><li>Favs</li></NavLink>
            <NavLink to="/" onClick={this.logOutClick} className="nav-link"><li href="#log out"><i className="fa fa-sign-out" aria-hidden="true"></i></li></NavLink>
          </ul>
        </nav> */}

        <nav>
    <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#checklist">Check</a></li>
  <li><a href="#my-list">List</a></li>
  <li><a href="#">Airports</a></li>
  <li class="log-out"><a href="#log-out"><i class="fa fa-sign-out" aria-hidden="true"></i></a></li>
    </ul>
  </nav>

      </header>
    );
  }
}

export default Navbar;
