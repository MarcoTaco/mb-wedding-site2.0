import React from "react";

interface FaqQuestionProps {
    question: string;
    answer: string;
}

function FaqQuestion({question, answer}: FaqQuestionProps){
    return(
        <div className="faq-question">
            <div className="question">

            </div>
            <div className="answer">

            </div>
        </div>
    );
}

export default FaqQuestion;