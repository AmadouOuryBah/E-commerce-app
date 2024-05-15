
import person from "../../assets/ion_person.png"
import { FiShoppingCart } from "react-icons/fi";
import search from "../../assets/search.png"
import { useContext, useEffect , useRef, useState} from "react";
import { CartContext } from "../../context/CartContext";
import HeaderCss from "../../components/Home/Header.module.css"
import { NavLink } from "react-router-dom";


const Header = () => {
  const {cartItems } = useContext(CartContext)
  
  const [fix , setFix ] = useState (false)

  const setFixedNavbar = () => {
    if(window.scrollY > 100) {
      setFix(true)
    }
    else{
      setFix(false)
    }
  }
 

  window.addEventListener('scroll', setFixedNavbar)
  const navigation = [
    {name : 'Home', href: '/'},
    {name : 'Stores', href: '/stores'},
    {name : 'Create store', href: 'createStore'},
    {name : 'Items', href: '/items'}
  ]
  
 
 
    return (
      <nav  style ={ fix ? {backgroundColor:'rgb(146, 133, 133)'} : null}  className={`${HeaderCss.navbar} navbar-expand-lg `  }>
          <div className={`${HeaderCss.container}`}>
              
              <a  style ={ fix ? {color:'#fff'} : null} className={`${HeaderCss.navbar_brand}`} href="#">NvBusiness</a>

              <div className={` navbar-nav ${HeaderCss.navbar_nav} `} >
                
                {
                  navigation.map((item) => (
                    <NavLink 
                        style ={ fix ? {color:'#fff'} : null}
                        className={({isActive}) => {
                          return 'nav-link' + (isActive ? 'primary' : null)  
                        }}
                        aria-current="page"
                        to={item.href}
                    
                    >
                      {item.name}
                    </NavLink>

                  ))
                }
            

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