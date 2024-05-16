import { useState, useEffect } from "react"
import style from "./index.module.css"
import {FaChevronDown} from "react-icons/fa"
import FooterLinks from "../../components/Home/FooterLinks";
import Footer from "../../components/Home/Footer";
import SearchBar from "../../components/common/SearchBar";
import { APP_URL, APP_RECOGNITION } from "../../utils/constants/applicationConstants";
import { Spinner } from '@chakra-ui/react';
import Card from "../../components/common/Card";
import {
    Input,
  } from '@chakra-ui/react'

const Item = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const loadMoreStores = () => {

  }
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
      console.log(searchQuery)
      const filteredData = items.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setItems(filteredData);
    };


    const getItems = () =>{
      
          fetch(`${APP_URL}/stores/items?` +  new URLSearchParams({
            numberOfItems: 50
          })  , {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',  
            },
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            return response.json()
          })
          .then(data => {
            setItems([...data]);
           
          })
          .catch(error => {
           console.log(error)
          });
    };

    function handleOnChange(){
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        
        const formData = new FormData();
        formData.append('file', file);

        fetch(`${APP_RECOGNITION}/classify_photo`, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data);

        })
        .catch(error => {
            console.error('There was a problem with the file upload:', error);
        });
    }

    useEffect(() => {
        getItems()
    }, [])

    return(
    <>
        <div className={style.container}>
            <hr />
            <p className="d-flex align-items-center  mb-4 justify-content-between">
              <SearchBar
                valueInput={searchQuery} 
                ChangeInput={handleSearch} 
                placeholder="Search product by name"
              />
              <Input id="fileInput" marginLeft={3} type='file' placeholder="Choose Picture To Search" onChange={handleOnChange} />
              
            </p>
            <hr />

            <div className={style.card_container}>
              {items.map((item, index) => (
                <Card key={index} product={item}/>
              ))}
            </div>

            <div className={style.loader}>
                {loading && <Spinner size="xl" /> }{/* Show loading indicator while fetching data */}
               </div>
          </div>

          <div className={style.btn_container}>
              {!loading && <button onClick={loadMoreStores} className="btn btn-primary">Load Items</button> }
          </div>
          <FooterLinks />
          <Footer />
    </>
    )
    
}

export default Item;