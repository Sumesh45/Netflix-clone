import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import { originals,actions } from "./urls";




function App() {
  return (
   <div>
    <NavBar/>
    <Banner/>
    <Cards url = {originals} title = 'Netflix Originals'/>
    <Cards url = {actions} title = 'Action' isSmall/>
    
   </div>
  );
}

export default App;
