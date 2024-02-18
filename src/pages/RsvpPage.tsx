import React from "react";
import RsvpForm from "../components/RsvpForm";
import "../styles/RsvpPage.css";

function RsvpPage(){
    return(
        <div className="rsvp-main">
            <div className="rsvp-left-section">
                <div className="rsvp-text-section">
                    <div className="rsvp-header">
                        <h3>See you soon?</h3>
                    </div>
                    <div className="rsvp-text">
                        <p>1. </p><p>Let us know if you'll be there!</p>
                    </div>
                    <div className="rsvp-text">
                        <p>2. </p><p> Let us know what you would like to drink!</p>
                    </div>
                </div>
            </div>
            <div className="rsvp-right-section">
                <div className="rsvp-form-section">
                    <RsvpForm />
                </div>
            </div>
        </div>
    )
}

export default RsvpPage;