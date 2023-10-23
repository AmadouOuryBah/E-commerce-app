import React from "react";
import HeaderCss from "../../components/Home/Header.module.css"
import person from "../../assets/ion_person.png"
import cart from "../../assets/Cart.png"
import search from "../../assets/search.png"


const Header = () => {

    return (
      <nav className={`${HeaderCss.navbar} navbar-expand-lg`}>
          <div className={`${HeaderCss.container}`}>
              
              <a className={`${HeaderCss.navbar_brand}`} href="#">MiniStore</a>

              <div className={` navbar-nav ${HeaderCss.navbar_nav} `} >
                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="/Store">Stores</a>
                <a className="nav-link" href="#">Contact</a>

                <div className={ `navbar-nav ${HeaderCss.Icon_Container}`}>
                  <a className="nav-link" href=""><img src={search}/></a>
                  <a className="nav-link" href="/Register"><img src={person}/></a>
                  <a className="nav-link" href="/Cart"><img src={cart}/></a>
               </div>
             </div>
            
          </div>
      </nav>
   )
}

export default Header