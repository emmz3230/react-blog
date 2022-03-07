// import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

function App() {
  
 return (
  <BrowserRouter>
   <div className="App">
      <Link to= "/">Home</Link>
      <Link to = "/contact">Contact</Link>
    </div>
<Routes>
  <Route exact path ="/" element ={<Home/>}></Route>
  <Route exact path ="/contact" element ={<Contact/>}></Route>

    </Routes>  
</BrowserRouter>
  );
}

export default App;
