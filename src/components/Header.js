import React from "react";

function Header(){
    return (
         <header>
          <nav className="nav">
            <img src="./logo192.png" className="image-logo" alt="logo" />
            <ul className="list">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }

  export default Header