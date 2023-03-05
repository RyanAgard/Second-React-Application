import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Forecast ({setLocation}) { 
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
    },);

    //  console.log(data)

 return (  
  
    <div className='forecast'>

  
       
          <div className="container1">
            <div className="box1">
           <h2>Mon</h2>
           {data.list&&<h2>{data.list[23].main.temp}°F</h2>}
           {data.list&& <img src={`http://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`} alt="icon"/> }
           {data.list&&<p>low {data.list[23].main.temp_min}°F</p>}
           </div>
          </div>  

          <div className="container2">
            <div className = "box2">
           <h2>Tue</h2>
           {data.list&&<h2>{data.list[32].main.temp}°F</h2>}
           {data.list&& <img src={`http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`} alt="icon"/> }
           {data.list&&<p>low {data.list[32].main.temp_min}°F</p>}
           </div>
          </div>

          <div className="container3">
            <div className = "box3">
           <h2>Wed</h2>
           {data.list&&<h2>{data.list[39].main.temp}°F</h2>}
           {data.list&& <img src={`http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`} alt="icon"/> }
           {data.list&&<p>low {data.list[39].main.temp_min}°F</p>}
           </div>
          </div>

          <div className="container4">
            <div className = "box4">
           <h2>Thu</h2> 
            {data.list&&<h2>{data.list[0].main.temp}°F</h2>}
            {data.list&& <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt="icon"/> }
            {data.list&&<p>low {data.list[0].main.temp_min}°F</p>}
            </div>
          </div>

          <div className="container5">

           <div className = "box5">
           <h2>Fri</h2> 
            {data.list&&<h2>{data.list[7].main.temp}°F</h2>}
            {data.list&& <img src={`http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`} alt="icon"/> }
            {data.list&&<p>low {data.list[7].main.temp_min}°F</p>} 
            </div>
          </div>
      </div>
      
  );
  
}
 
export default Forecast ;