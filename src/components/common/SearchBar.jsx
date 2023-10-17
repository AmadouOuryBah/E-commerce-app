import React from "react";
import searchBar from "../../components/common/searchBar.module.css"
import {FaSearch} from "react-icons/fa"



const SearchBar = (props) => {

    return (
            <> 
                <div className={searchBar.form_input}>
                        <FaSearch className={searchBar.search_icon}/>
                        <input placeholder={props.placeholder} type="text"/>
                </div> 
              
            </>        
    )
}

export default SearchBar