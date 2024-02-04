import React from 'react';
import "../styles/HomePage.css";

function HomePage(){
    return(
        <div className="main">
            <div className="home-main">
                <div className="home-intro-section">
                    <div className="home-intro">
                        <div className="home-text">
                            <p className="big-text">When?</p>
                            <p className="small-text">September 7th, 2024</p>
                        </div>
                        <div className="middle-section">
                            <div className="arched-text">
                                <span className="character">THE</span>
                                <span className="character">WEDDING</span>
                                <span className="character">OF</span>
                                <span className="character">MAR</span>
                                <span className="character">CO</span>
                                <span className="character">+</span>
                                <span className="character">BRIT</span>
                                <span className="character">TANY</span>
                            </div>
                            <div className="middle-picture">
                                <div className="img-holder"></div>
                            </div>
                        </div>
                        <div className="home-text">
                            <p className="big-text">Where:</p>
                            <p className="small-text">The Aurora Colony Vineyards.</p>
                            <p className="small-text">21338 Oak Ln NE, Aurora, OR 97002</p>
                        </div>
                    </div>
                </div>
                <div className="wedding-info">
                    <div className="ceremony-info">
                        <p className="big-text">Ceremony</p>
                        <p className="big-text">3:30pm</p>
                        <p className="small-text">Aurora Colony Vineyards</p>
                    </div>
                    <div className="plus">
                        <p>+</p>
                    </div>
                    <div className="reception-info">
                        <p className="big-text">Reception</p>
                        <p className="big-text">4:30pm</p>
                        <p className="small-text">Aurora Colony Vineyards</p>
                    </div>
                    <div className="rsvp-button">
                        <button>RSVP &gt;</button>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faqs">
                        <p className="big-text">Questions?</p>
                        <p className="small-text">Check out our FAQ page</p>
                    </div>
                </div>
                <div className="registry-section">
                    <p className="big-text">Your presence is enough of a gift... But if you must</p>
                    <p className="small-text">Here's our Registry</p>
                </div>
                <div className="home-final-message-section">
                    <div className="home-final-message">
                        <p>Join us in celebrating our love and creating memories that will last a lifetime!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;