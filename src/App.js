import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Contact from "./contact";
import {browserRouter,Routes,route,Link, BrowserRouter} from "react-router-dom";

function App() {
  <BrowserRouter>
<Routes>
  <Route exact path ="/" element ={<Home/>}></Route>
  <Route exact path ="/" element ={<Contact/>}></Route>

    </Routes>  
</BrowserRouter>
 return (

   <div className="App">
      <Link to= "/">Home</Link>
      <Link to = "/contact">Contact</Link>
    </div>
  
  );
}

export default App;
