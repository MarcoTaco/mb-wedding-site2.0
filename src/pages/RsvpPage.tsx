import React from "react";
import RsvpForm from "../components/RsvpForm";
import "../styles/RsvpPage.css";

function RsvpPage(){
    return(
        <div className="rsvp-main">
            <div className="rsvp-text-section">
                <div className="rsvp-header">
                    <h3>See you soon?</h3>
                </div>
                <div className="rsvp-text">
                    <h5>1. </h5><p>Let us know if you'll be there!</p>
                </div>
                <div className="rsvp-text">
                    <h5>2. </h5><p>Let us know what you would like to drink!</p>
                </div>
            </div>
            <div className="rsvp-form-section">
                <RsvpForm />
            </div>
        </div>
    )
}

export default RsvpPage;