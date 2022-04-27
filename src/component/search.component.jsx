import React, { useEffect, useState } from "react";

 const weather = () => {
     const[search,setsearch] = useState('delhi'); 
     const[data,setdata] = useState([]);
     const[input,setinput] = useState(""); 
      let componentmounted = true;
       
      useEffect(()  => {
          const fetchWeather = async () =>  {
                const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={ccb910c0933ad6dccd6a5ee5e8794724}');
                if(componentmounted){
                    setdata(await response.json ());
                    console.log(data)
                }
                return () => {
                    componentmounted =false;
                }
            }
            fetchWeather();
        },[]);

        return (
            <>
           
            <h2>{data.temp}</h2>
            <h1>{data.name}</h1>
            
          
      </>
            
            
        );
    
    };
    export default weather;
