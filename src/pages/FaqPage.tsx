import React from "react";
import "../styles/FaqPage.css";
import FaqQuestion from "../components/FaqQuestion";

function FaqPage(){
    return(
        <div className="faq-main">
            <div className="faq-section">
                <div className="questions-section">
                    <div className="faqs-header">
                        <h2>FAQ's</h2>
                        <h3>We thought of every question you might have, and answered them all here.</h3>
                    </div>
                    <div className="questions-answers">
                        <FaqQuestion question="Are kids allowed?" answer="Yes! However, please note that that none of the music will be
                            censored. We have waited 3,000 days to celebrate. If this is something you do not want your kid exposed to, we
                            suggest they stay home!" />
                        <FaqQuestion question="Can I bring a +1?" answer="The answer to this is probably no. If you feel you can plead a really
                            (and I mean really) strong case, text us." />
                        <FaqQuestion question="What should I wear?" answer="Get dressed up. Get crazy. Wear something with a little pizzaz 
                            that you've been wanting to pull out. Just make sure you can dance in it!" />
                        <FaqQuestion question="Is the wedding inside or outside?" answer="Weather permitting the wedding will be outside. However, 
                            there will be an indoor area as well!" />
                        <FaqQuestion question="How should we get there?" answer="Although there is ample parking, we do recommend Uber/Lift if you plan on 
                            having a few drinks!" />
                        <FaqQuestion question="I don't eat meat.  Will there be food for me?" answer="No problem! We will make sure to have dairy free + 
                            meat-free alternatives available." />
                        <FaqQuestion question="Will there be an open bar?" answer="Yes!  No liquor is allowed on site, however.  So we will provide beer, cider, 
                            seltzers, and wine!" />
                        <FaqQuestion question="Can I bring your wedding gift or should I mail it?" answer="Your presence at our wedding is the greatest gift we could ask 
                            for! If you would like to honor us with a gift, you can have it delivered to our home. A wedding card 
                            box will be at our reception." />
                        <FaqQuestion question="What time should I arrive?" answer="The bar will open at 3:00, and the ceremony will begin at 3:30. If you are late, you will not be 
                            permitted to enter the ceremony as to not disrupt. Please do not be late. " />
                        <FaqQuestion question="What time will you reception end?" answer="Our reception will end around 10 PM. " />
                        <FaqQuestion question="Can you suggest things to do while I'm in town?" answer="Brittany has a spreadsheet for that.  
                            Send her your email and she can add you to it!" />
                    </div>
                </div>
                <div className="img-section">
                    <div className="first-img">

                    </div>
                    <div className="second-img">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage;