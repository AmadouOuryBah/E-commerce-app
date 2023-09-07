
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  './pages/Home/Home'
import AppCss from "./App.module.css"

import React from "react";

function App() {
  return (
        <div className={AppCss.Container}>
          <Home /> 
        </div>
  );
}

export default App;

