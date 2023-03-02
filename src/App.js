import { Link,Routes,Route } from "react-router-dom";
import './App.css';
import Traffic from "./components/Contact";
import Home from"./components/Home";
import Forecast from "./components/Forecast";
import {useState} from "react"; 


function App() {
  const [location,setLocation]=useState('')
  return (
<>
 <div className = 'navbar'>
   
    <Link to ="/"><div>Home</div></Link>

  
    <Link to ="/Traffic"><div>Traffic</div></Link> 
</div>

  <Routes >
       <Route path = "/" element ={<Home location={location} setLocation={setLocation} />} />  
       <Route path = "/Forecast" element ={<Forecast  location={location} setLocation={setLocation}/>} />
       <Route path = "/Traffic" element ={<Traffic />} />
  </Routes>

</>


  
  );
}

export default App;
