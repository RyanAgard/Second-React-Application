import { Link,Routes,Route } from "react-router-dom";
import './App.css';
import Home from"./components/Home";
import Forecast from "./components/Forecast";
import {useState} from "react"; 
import Contact from "./components/Contact";


function App( ) {
  const [location,setLocation]=useState('')
   
    
   
  
  
  return (
<>
 <div className = 'navbar'>
   
    <Link Link className ="text-link" to ="/"><div className ="Navfont">Home</div></Link>

    <Link Link className ="text-link"to ="/Contact"><div className ="Navfont">Contact</div></Link> 
</div>

  <Routes >
       <Route path = "/" element ={<Home location={location} setLocation={setLocation} />} />  
       <Route path = "/Forecast/:id" element ={<Forecast  location={location} setLocation={setLocation}/>} />
       <Route path = "/Contact" element ={<Contact/>} />
  </Routes>

</>


  
  );
}

export default App;
