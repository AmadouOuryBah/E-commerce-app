
import person from "../../assets/ion_person.png"
import { FiShoppingCart } from "react-icons/fi";
import search from "../../assets/search.png"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import HeaderCss from "../../components/Home/Header.module.css"


const Header = () => {
  const {cartItems } = useContext(CartContext)

    return (
      <nav className={`${HeaderCss.navbar} navbar-expand-lg`}>
          <div className={`${HeaderCss.container}`}>
              
              <a className={`${HeaderCss.navbar_brand}`} href="#">NvBusiness</a>

              <div className={` navbar-nav ${HeaderCss.navbar_nav} `} >
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                <a className="nav-link" href="/stores">Stores</a>
                <a className="nav-link" href="/createStore">Create store</a>
                <a className="nav-link" href="#">Contact</a>

                <div className={ `navbar-nav ${HeaderCss.Icon_Container}`}>
                  <a className="nav-link" href=""><img src={search}/></a>
                  <a className="nav-link" href="/register"><img src={person}/></a>
                  <div className={HeaderCss.cart_logo}>
                    <a className="nav-link" href="/cart"><FiShoppingCart /></a>
                    <span>({cartItems.length})</span>
                  </div>
                
               </div>
             </div>
            
          </div>
      </nav>
   )
}

export default Header