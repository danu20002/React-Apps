import React from 'react'
import Header from '../common/Header'
import './About.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function About() {
  let [city,setcity]=useState('')
  let [wdetails,setwdetails]=useState()
  const [isLoading, setIsLoading] = useState(false);
let getData=(event)=>{
 setIsLoading(true)
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
         .then((res)=>res.json())
         .then((finalRes)=>{
          if(finalRes.cod=="404"){
                  setwdetails(undefined)
                  toast.error("Kya nam daltaa reee tuu 😡")
                  setIsLoading(false)
          }else{
             setwdetails(finalRes)
             toast.success("Accha Mosam Hai 😊😊")
             setIsLoading(false)
          }
          
         })
     event.preventDefault();
}


  return (
    <div>
      <Header/>
      <h2> WELCOME TO  WEATHER APP</h2>
      <div className='weatherpage'>
        <form onSubmit={getData}>
         <input type='text' placeholder='City Name' value={city} onChange={(e)=>setcity(e.target.value)}></input>
         <button>Submit</button>
         </form>
      </div>

      <div className='contentHolder'>
        <img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif' className={`imgload ${isLoading ? '' : 'hidden'}`}/>
        {wdetails!==undefined
        ?
        <>
        <h2> City : {wdetails.name} <span>{wdetails.sys.country}</span></h2>
        <h3> Tempreture : {wdetails.main.temp}</h3>
        <img src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`}/>
        <p>Description : {wdetails.weather[0].description}</p>
        <p> Humidity : {wdetails.main.humidity}</p>
        <p>pressure : {wdetails.main.pressure}</p>
        <h1>Wind</h1>
        <p>speed : {wdetails.wind.speed}</p>
        <p>deg : {wdetails.wind.deg}</p>
        <h1>Clouds</h1>
        <p>all : {wdetails.clouds.all}</p>
        </>
        :
         'No data'
        }
      </div>
      <ToastContainer/>
    </div>
  )
}

export default About
