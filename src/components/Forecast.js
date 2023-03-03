
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Forecast ({location,setLocation}) {
    const {id}=useParams()
    const [data,setData]=useState({})
    const key ='4ebfa68127b633eaddf769fa6f723811'
    const url =`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&appid=${key}` 
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

      Fetchforecast()
    },[]);

    //  console.log(data)

 return (  
    <div className='forecast'>
     
          <div className="container1">
           <h1>Mon</h1>
           {data.list&&<h1>{data.list[23].main.temp}°F</h1>}
           {data.list&&<h1>min {data.list[23].main.temp_min}°F</h1>}
           {/* <img>images</img> */}
         
          </div>  
          <div className="container2">
           <h1>Tue</h1>
           {data.list&&<h1>{data.list[32].main.temp}°F</h1>}
           {data.list&&<h1>min {data.list[32].main.temp_min}°F</h1>}
        
          </div>
          <div className="container3">
           <h1>Wed</h1>
           {data.list&&<h1>{data.list[39].main.temp}°F</h1>}
           {data.list&&<h1>min {data.list[39].main.temp_min}°F</h1>}
          </div>
          <div className="container4">
           <h1>Thu</h1> 
            {data.list&&<h1>{data.list[0].main.temp}°F</h1>}
            {data.list&&<h1>min {data.list[0].main.temp_min}°F</h1>}
           {/* <img>images</img> */}
          </div>
          <div className="container5">
           <h1>Fri</h1> 
            {data.list&&<h1>{data.list[7].main.temp}°F</h1>}
            {data.list&&<h1>min {data.list[7].main.temp_min}°F</h1>}
           {/* <img>images</img> */}   
          </div>
        </div>
  
  );
}

export default Forecast ;