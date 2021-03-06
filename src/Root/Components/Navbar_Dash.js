import React from 'react'

function Navbar_Dash() {
    return (
        <div className='navbar-dash'>
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">DY</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html">Create Blog</a></li>
                  <li><a href="badges.html">My Blogs</a></li>
                  <li><a href="collapsible.html">Logout</a></li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Navbar_Dash
