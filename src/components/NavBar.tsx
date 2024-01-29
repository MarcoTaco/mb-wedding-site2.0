import React from "react";
import "../styles/NavBar.css";

function NavBar(){
    return(
        <div className="navigation-bar">
            <div className="logo">
                <h4>M + B</h4>
            </div>
            <nav>
                <ul>
                    <li>The Wedding</li>
                    <li>Story</li>
                    <li>RSVP</li>
                    <li>FAQ's</li>
                    <li>Registry</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;