import React from 'react'
import {Link} from 'react-router-dom'

function Navbar_Home() {
    return (
        <div className='navbar-home'>
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">DY</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/slambook/home">Feed</Link></li>
                  <li><Link to="/slambook/login">Login</Link></li>
                  <li><Link to="/slambook/register">Register</Link></li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Navbar_Home
