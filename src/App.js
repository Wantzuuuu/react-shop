import axios from "axios"

// import { useState ,useEffect } from "react";
import {Route , Routes} from "react-router-dom"


import FrontView from "./views/FrontViews";
import BackDesk from "./views/BackDesk";
// css
import "./style/css/style.css"
import "./style/icon/style.css"
// axios.defaults.withCredentials = true
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/*"} element={<FrontView/>} />
        <Route path={"manager/*"} element={<BackDesk/> }/>
      </Routes>
    </div>
  );
}

export default App;
