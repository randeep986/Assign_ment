
import "./App.css";

import AllRoute from "./ProductsPages/AllRoute";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      
      <div className="main-nav">   
      <Navbar />
      </div>
      <AllRoute/>
      
    </div>
  );
}

export default App;

