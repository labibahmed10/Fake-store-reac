// import logo from "./logo.svg";
import "./App.css";
import Cards from "./Component/Cards/Cards";
import Navbar from "./Component/Navbar/Navbar";
import SearchBar from "./Component/SearchBar.js/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Cards></Cards>
    </div>
  );
}

export default App;
