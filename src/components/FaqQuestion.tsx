import React from "react";
import "../styles/FaqQuestion.css";

interface FaqQuestionProps {
    question: string;
    answer: string;
}

function FaqQuestion({question, answer}: FaqQuestionProps){
    return(
        <div className="faq-question">
            <div className="question">
                <h3><strong>Q: </strong>{question}</h3>
            </div>
            <div className="answer">
                <h3><strong>A: </strong></h3><p>{answer}</p>
            </div>
        </div>
    );
}

export default FaqQuestion;