
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  './pages/Home/Home';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Store from "./pages/Store"
import StoreDetail from  "./pages/StoreDetail"
import Cart from "./pages/Cart/index"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import React from "react";
import Header from "./components/Home/Header"
import './App.css'

function App() {
  return (
        <>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/Home" exact element={<Home/>} />
              <Route path="/Register" exact element={<Register/>} />
              <Route path="/Login" exact element={<Login/>} />
              <Route path="/Store" exact element={<Store/>} />
               <Route path="/StoreDetail" exact element={<StoreDetail/>} />
                 <Route path="/Cart" exact element={<Cart/>} />
            
           </Routes>
          </BrowserRouter>
         
        </>
  );
}

export default App;

