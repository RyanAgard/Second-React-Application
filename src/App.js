import { Link,Routes,Route } from "react-router-dom";
import './App.css';
import Home from"./components/Home";
import Forecast from "./components/Forecast";
import {useState} from "react"; 
import Contact from "./components/Contact";



function App() {
  const [location,setLocation]=useState('');
  const [client, setClient] = useState();
  

  function addClient(cli) {
    setClient([...client, cli]);
  }
  
  return (
<>
 <div className = 'navbar'>
   <div className = "Home">
    <Link Link className ="text-link" to ="/"><div className ="Navfont">Home</div></Link>
  </div>


    <div className = "Contact">
    <Link  Link className ="text-link"to ="/Contact"><div className ="Navfont">Contact</div></Link>
    </div> 
</div>

  <Routes >
      
       <Route path = "/" element ={<Home location={location} setLocation={setLocation} />} />  
     
       <Route path = "/Forecast/:id" element ={<Forecast  location={location} setLocation={setLocation}/>} />
     
       <Route path = "/Contact" element ={<Contact client={client} addClient={addClient}/>} />

  </Routes>
  <div></div>

</>
  );
}

export default App;
