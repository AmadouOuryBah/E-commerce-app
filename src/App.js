
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  './pages/Home/Home';
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import React from "react";
import Header from "./components/Home/Header"

function App() {
  return (
        <>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/Home" exact element={<Home/>} />
              <Route path="/Register" exact element={<Register/>} />
            
           </Routes>
          </BrowserRouter>
         
        </>
  );
}

export default App;

