import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import Work from "./Work";
import Navbar from "./Navbar";
function App() {
  return (
    <>    
    <BrowserRouter>
    <Navbar/>
     <Routes> 
 <Route path="/" element={<Home/>}/>
 <Route path="/work" element={<Work/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/contect" element={<Contect/>}/>
      </Routes>
 </BrowserRouter>
  </>
 
  );
}

export default App;
