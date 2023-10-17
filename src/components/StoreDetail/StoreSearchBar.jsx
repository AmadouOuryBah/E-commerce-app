import React from "react";
import storeSearchBar from "../../components/StoreDetail/StoreSearchBar.module.css"
import SearchBar from "../common/SearchBar";
import storeSearchBarStyle from "../../components/StoreDetail/StoreSearchBar.module.css"

const StoreSearchBar = () => {

    return (
        <>
            <section className={storeSearchBarStyle.container}>
        
                <div className=" d-flex justify-content-between">
                    <h3>Home</h3>
                     <SearchBar placeholder="search in store"/>             
                </div>
            </section>
       </>
                  
    )
}

export default StoreSearchBar