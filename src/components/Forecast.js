
import { useState,useEffect } from "react";

function Forecast ({location,setLocation}) {
    const [data,setData]=useState({})
    const key ='4ebfa68127b633eaddf769fa6f723811'
    const url =`http://api.openweathermap.org/geo/1.0/direct?q=${location},&appid=${key}` 
    const Fetchforecast = async () => { 
      try {
      const reponse = await fetch(url);
      const data = await reponse.json();
      console.log(data)
      setData(data)
      setLocation('')
    } catch (error) {
      console.log(error);
    }
  
     }  
      
      useEffect(()=>{

      // Fetchforecast()
    },[]);

     console.log(location)

 return (  
    <div className='forecast'>
           
           <div className="container1">
           <h1>Mon</h1>
           {/* <img>images</img> */}
           <h2>28</h2>
          </div>
          <div className="container2">
           <h1>Tue</h1>
           {/* <img>images</img> */}
           <h2>28</h2>
          </div>  
          <div className="container3">
           <h1>Wed</h1>
           {/* <img>images</img> */}
           <h2>28</h2>
          </div>
          <div className="container4">
           <h1>Thu</h1>
           {/* <img>images</img> */}
           <h2>28</h2>
          </div>
          <div className="container5">
           <h1>Fri</h1>
           {/* <img>images</img> */}
           <h2>28</h2>
          </div>
          <div className="container6">
           <h1>Sat</h1>
           {/* <img>images</img> */}
           <h2>28</h2>
          </div>
        </div>
  
  );
}

export default Forecast ;