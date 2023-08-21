import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import {NavbarNew} from "./components/layout/navigation/NavbarNew/NavbarNew";
import React from "react";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {Routes, Route, BrowserRouter,} from "react-router-dom";
import {Announcement} from "./components/layout/Announcement/Announcement";
import {HomePage} from "./pages/HomePage/HomePage";


function App() {
  return (
        <div>
          <BrowserRouter>
              <Announcement/>
              <NavbarNew/>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="services/chatapp"/>
                  <Route path="login" element={ <LoginPage/> } />
                  <Route path="register" element={ <RegisterPage/> } />
              </Routes>
          </BrowserRouter>
        </div>

  );
}

export default App;
