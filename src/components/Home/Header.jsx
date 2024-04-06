import React from "react";
import HeaderCss from "../../components/Home/Header.module.css"
import person from "../../assets/ion_person.png"
import { FiShoppingCart } from "react-icons/fi";

import cart from "../../assets/Cart.png"
import search from "../../assets/search.png"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Header = () => {
  const {cartItems } = useContext(CartContext)

    return (
      <nav className={`${HeaderCss.navbar} navbar-expand-lg`}>
          <div className={`${HeaderCss.container}`}>
              
              <a className={`${HeaderCss.navbar_brand}`} href="#">NvBusiness</a>

              <div className={` navbar-nav ${HeaderCss.navbar_nav} `} >
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="/stores">Stores</a>
                <a className="nav-link" href="#">Contact</a>

                <div className={ `navbar-nav ${HeaderCss.Icon_Container}`}>
                  <a className="nav-link" href=""><img src={search}/></a>
                  <a className="nav-link" href="/register"><img src={person}/></a>
                  <a className="nav-link" href="/cart"><FiShoppingCart /><span>({cartItems.length})</span></a>
               </div>
             </div>
            
          </div>
      </nav>
   )
}

export default Header