import React from "react";
import RsvpForm from "../components/RsvpForm";
import "../styles/RsvpPage.css";

function RsvpPage(){
    return(
        <div className="Rsvp-main">
            <div className="rsvp-text">

            </div>
            <div className="rsvp-form-section">
                <RsvpForm />
            </div>
        </div>
    )
}

export default RsvpPage;