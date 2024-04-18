
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  './pages/Home/Home';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Store from "./pages/Store"
import AddStore from "./pages/AddStore"
import StoreDetail from  "./pages/StoreDetail"
import ManageStore from "./pages/ManageStore/index"
import Cart from "./pages/Cart/index"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import React from "react";
import './App.css'
import Header from './components/Home/Header';

function App() {
  return (
        <>
          <BrowserRouter>
           <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path="/register" exact element={<Register/>} />
              <Route path="/login" exact element={<Login/>} />
              <Route path="/stores" exact element={<Store/>} />
               <Route path="/stores/:id" exact element={<StoreDetail/>} />
              <Route path="/cart" exact element={<Cart/>} />
              <Route path="/createStore" exact element={<AddStore/>} />
              <Route path="/manage_store/:id" exact element={<ManageStore/>} />
           </Routes>
          </BrowserRouter>
         
        </>
  );
}

export default App;

