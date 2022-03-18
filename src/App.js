// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Cards from "./Component/Cards/Cards";
import Navbar from "./Component/Navbar/Navbar";
import SearchBar from "./Component/SearchBar.js/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartNum, setCartNum] = useState(0);

  return (
    <div className="App">
      <Navbar number={cartNum}></Navbar>
      <SearchBar></SearchBar>
      <Cards number={cartNum} func={setCartNum}></Cards>
    </div>
  );
}

export default App;
