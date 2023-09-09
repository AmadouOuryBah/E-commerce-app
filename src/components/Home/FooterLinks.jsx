import React from "react";
import Footer from "../../components/Home/Footerlinks.module.css"

const FooterLinks = () => {

    return (
        <div className={Footer.footer_container}> 
        
            <div>
                <p>MiniStore</p>
                <p>
                    Nisi, purus vitae, ultrices nunc. <br/>Sit ac sit suscipit hendrerit. 
                    Gravida massa volutpat aenean odio<br/> erat nullam fringilla.
                </p>
               
            </div>
            <div>
                <p>QUICKS LINKS</p>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>SHOP</a></li>
                    <li><a>BLOGS</a></li>
                    <li><a>CONTACT</a></li>

                </ul>
            </div>
            <div>
                <p>HELP & INFO</p>
                <ul>
                    <li>TRACK YOUR ORDER</li>
                    <li>RETURN POLICIES</li>
                    <li>SHIPPIMG + DELIVERY</li>
                    <li>CONTACT US</li>
                    <li>FAQS</li>
                </ul>
            </div>

            <div>
                <p>CONTACT US</p>
                <p>Do you have any queries<br/>or suggestions?</p>
                <p>YourInfo@gmail.com</p>
                <p>if you need a support ? just give us <br/>a call</p>
            </div>
        </div> 

                  
    )
}

export default FooterLinks