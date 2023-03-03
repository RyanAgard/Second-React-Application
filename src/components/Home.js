import { Link,Routes,Route } from "react-router-dom";
import { useState,useEffect } from "react"; 


function Home({location,setLocation}) {
    const [data,setData]=useState({})
    

    
    const key = 'a5bebca51e716249c95982a62c733863' 
    const Fetchweather = async (event) => { 
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`
    if(event.key ==="Enter"){
    try {
      const reponse = await fetch(url);
      const data = await reponse.json();
      console.log(data)
      setData(data)
      setLocation('')
    } catch (error) {
      console.log(error);
    }
  };
  }  
  useEffect(()=>{

        // Fetchweather()
    },[]);


 return (  

 <div className = 'home'>
    
     <div className="search">
        <input
        value={location} 
        onChange = {event => setLocation(event.target.value)}
        onKeyUpCapture={Fetchweather}
        placeholder = "Enter Location"
        type = "text"/>
     </div>
         <div className = 'constainer'> 
            <div className ='top'>
                <div className="location">
                    <p>{data.name}</p>     
                </div>
                <div className="temp">
                {data.main?<h1>{data.main.temp}°F</h1>:null }       
                </div>
                     <div className="description">
                    {data.weather? <p>{data.weather[0].main}</p>:null}  
                 </div>
           </div>
   

           {data.name!=undefined&&
            <div className = "bottom">
             <div className = "feels">
             {data.main? <p className='bold'>{data.main.feels_like}°F</p>:null}  
             <p className="bold">Feels like </p>  
             </div>

             <div className="humidity" >
             {data.main? <p className="bold">{data.main.humidity}%</p>:null}  
                 <p>Humidity</p>
             </div>      
            <div className="Wind" >
            {data.wind? <p className="bold">{data.wind.speed}MPH</p>:null}  
                <p>Wind Speed</p>
             </div>   
              
           </div>
           } 

           {data.name!=undefined&&
             <div className = 'Forecast'>
             <Link className ="text-link"to ={`/Forecast/${data.id}`} ><div className="Forecastfont">Forecast</div></Link> 
             </div> 
             }     
    </div>
 </div>

 );
}

export default Home;