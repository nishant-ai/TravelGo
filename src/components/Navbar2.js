import React from 'react'
import { Link } from 'react-scroll';
import "./Navbar.css"
import logo from "../assets/TravelGo.png"
import fav from "../assets/favourite.png";
import profile from "../assets/Profile.png"
export default function Navbar() {
  return (
    <>
    <div>
      <nav className="navbar" id="home">
        <div className="logos">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="nav-link">
            <li className="nav-item">
              
                <button className="nav-linkers link--btns" id="home--link"> <Link to="home">Home</Link></button>
              
          </li>
          <li className="nav-item">
          
            <button className="nav-linkers link--btns" id="stocks--link" to="/aboutus"><Link to="stocks" smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20} className="links">
              About Us</Link>
            </button>
          </li>
          <li className="nav-item">
            {/* <a href="#" className="nav-linkers">About Us</a>  */}
            <button className="nav-linkers link--btns" id="about--link"><Link to="packages" smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-20}>
              Packages</Link>
            </button>
          </li>
          <li>
            <img src={fav}></img>
            <img src={profile}></img>
          </li>
        </ul>
      </nav>
      </div>
      </>
    );
}