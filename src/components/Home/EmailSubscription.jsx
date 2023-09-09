import React from "react";
import EmailSubscriptionCss from "../../components/Home/EmailSubscription.module.css"



const EmailSubscription = () => {

    return (
            <div className={EmailSubscriptionCss.container}  > 
             
                <div className={EmailSubscriptionCss.mailInfo}>
                    <p className={EmailSubscriptionCss.title}>SUBSCRIBE US NOW</p>
                    <p className={EmailSubscriptionCss.second_para}>Get latest news, updates and deals directly mailed to your ibox</p>
                </div>

                <div className={EmailSubscriptionCss.input_container}>
                    <input type="email" placeholder="Your email address here"/><button>SUBSCRIBE</button>
                </div>
        
            </div>        
    )
}

export default EmailSubscription