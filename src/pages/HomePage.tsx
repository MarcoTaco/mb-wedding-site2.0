import React from 'react';
import "../styles/HomePage.css";

function HomePage(){
    return(
        <div className="main">
            <div className="home-main">
                <div className="home-intro-section">
                    <div className="home-intro">
                        <div className="home-text">
                            <p>When?</p>
                            <p>September 7th, 2024</p>
                        </div>
                        <div className="middle-section">
                            <div className="arched-text">
                                <span className="character">T</span>
                                <span className="character">H</span>
                                <span className="character">E</span>
                                <span className="character"></span>
                                <span className="character">W</span>
                                <span className="character">E</span>
                                <span className="character">D</span>
                                <span className="character">D</span>
                                <span className="character">I</span>
                                <span className="character">N</span>
                                <span className="character">G</span>
                                {/* <span className="character"></span>
                                <span className="character">O</span>
                                <span className="character">F</span>
                                <span className="character"></span>
                                <span className="character">M</span>
                                <span className="character">A</span>
                                <span className="character">R</span>
                                <span className="character">C</span>
                                <span className="character">O</span>
                                <span className="character">+</span>
                                <span className="character">B</span>
                                <span className="character">R</span>
                                <span className="character">I</span>
                                <span className="character">T</span>
                                <span className="character">T</span>
                                <span className="character">A</span>
                                <span className="character">N</span>
                                <span className="character">Y</span> */}
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
        </div>
    );
}

export default HomePage;