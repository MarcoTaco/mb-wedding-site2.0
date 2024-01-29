import React from 'react';
import "../styles/HomePage.css";

function HomePage(){
    return(
        <div className="home-main">
            <div className="home-intro">
                <div className="home-text">
                    <p>When?</p>
                    <p>September 7th, 2024</p>
                </div>
                <div className="middle-section">
                    <div className="middle-text">
                        The Wedding of Marco + Brittany
                    </div>
                    <div className="middle-picture">
                        <div className="img-holder"></div>
                    </div>
                </div>
                <div className="home-text">
                    <p>Where:</p>
                    <p>The Aurora Colony Vineyards.</p>
                    <p>21338 Oak Ln NE, Aurora, OR 97002</p>
                </div>
            </div>
            <div className="wedding-info">
                <div className="ceremony-info">
                    <p>Ceremony</p>
                    <p>3:30pm</p>
                    <p>Aurora Colony Vineyards</p>
                </div>
                <div className="plus">
                    <p>+</p>
                </div>
                <div className="reception-info">
                    <p>Reception</p>
                    <p>4:30pm</p>
                    <p>Aurora Colony Vineyards</p>
                </div>
                <div className="rsvp-button">
                    <button>RSVP &gt;</button>
                </div>
            </div>
            <div className="faq-section">
                <div className="faqs">
                    <p>Questions?</p>
                    <p>Check out our FAQ page</p>
                </div>
            </div>
            <div className="registry-section">
                <p>Your presence is enough of a gift... But if you must</p>
                <p>Here's our Registry</p>
            </div>
            <div className="home-final-message">
                <p>Join us in celebrating our love and creating memories that will last a lifetime!</p>
            </div>
        </div>
    );
}

export default HomePage;