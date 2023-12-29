import React from 'react'
import logo from '../assets/images/logo.svg'




function Navbar() {

    return (
    


    <nav>
        <div className="nleft">
               <img src={logo} alt="" />
        </div>
        <div className="nright">
        <div className="hamburger" >
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
            <ul className="nav-links">
                <il><a href="#">home</a></il>
                <il><a href="#">new</a></il>
                <il><a href="#">Popular</a></il>
                <il><a href="#">Trending</a></il>
                <il><a href="#">Categories</a></il>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar