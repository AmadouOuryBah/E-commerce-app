import React from "react";
import Footer from "../../components/Home/FooterLinks.module.css"

const FooterLinks = () => {

    return (
        <div className={Footer.footer_container}> 
        
            <div>
                <p className={Footer.title}>MiniStore</p>
                <p className={Footer.paraSize}>
                    Nisi, purus vitae, ultrices nunc. <br/>Sit ac sit suscipit hendrerit. 
                    Gravida massa volutpat aenean odio<br/> erat nullam fringilla.
                </p>
               
            </div>
            <div>
               
                <ul className={Footer.list}>
                    <li><p>QUICKS LINKS</p></li>
                    <li className={Footer.link}><a href="#">HOME</a></li>
                    <li className={Footer.link}><a href="#">ABOUT</a></li>
                    <li className={Footer.link}><a href="#">SHOP</a></li>
                    <li className={Footer.link}><a href="#">BLOGS</a></li>
                    <li className={Footer.link}><a href="#">CONTACT</a></li>

                </ul>
            </div>
            <div>
           
                <ul className={Footer.list}>
                <li><p>HELPS $ INFO</p></li>
                    <li className={Footer.link}> <a href="#">TRACK YOUR ORDER</a></li>
                    <li className={Footer.link}> <a href="#">RETURN POLICIES</a></li>
                    <li className={Footer.link} ><a href="#">SHIPPIMG + DELIVERY</a></li>
                    <li className={Footer.link}><a href="#">CONTACT US</a></li>
                    <li className={Footer.link}><a href="#">FAQS</a></li>
                </ul>
            </div>

            <div>
                <p className={Footer.title}>CONTACT US</p>
                 <p>o you have any queries or  suggestions?<br/>
                    <span className={Footer.email}>YourInfo@gmail.com<br/></span>
                 if you need a support ? just give us <br/>a call</p>
            </div>
        </div> 

                  
    )
}

export default FooterLinks