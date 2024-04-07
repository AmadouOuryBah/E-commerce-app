
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  './pages/Home/Home';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Store from "./pages/Store"
import AddStore from "./pages/AddStore"
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
              <Route path='/' element={<Home/>} />
              <Route path="/home" exact element={<Home/>} />
              <Route path="/register" exact element={<Register/>} />
              <Route path="/login" exact element={<Login/>} />
              <Route path="/stores" exact element={<Store/>} />
               <Route path="/stores/:id" exact element={<StoreDetail/>} />
              <Route path="/cart" exact element={<Cart/>} />
              <Route path="/createStore" exact element={<AddStore/>} />
            
           </Routes>
          </BrowserRouter>
         
        </>
  );
}

export default App;

