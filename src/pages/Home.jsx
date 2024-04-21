import React from "react";
import Header from "../common/Header";
import "./Home.css";
import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from "../Data/PassChar";

function Home() {

 let [uppercase,setuppercase]=useState(false)
 let [lowercase,setlowercase]=useState(false)
 let [number,setNumber]=useState(false)
 let [symbol,setsymbol]=useState(false)
 let [passwlength,setpasslength]=useState(10)
 let [fpass,setfpass]=useState('')


 let createPassword=()=>{
    
    let Charset=''
    let finalpass=''
   if(uppercase || lowercase || number || symbol){
      if(uppercase) Charset+=UC;
      if(lowercase) Charset+=LC;
      if(number) Charset+=NC;
      if(symbol) Charset+=SC;
       for(let i=0;i<passwlength;i++){
        finalpass+=Charset.charAt(Math.floor(Math.random()*Charset.length))
        setfpass(finalpass)
       }
       toast.success("Lele Muh mai tera passward 😊😁")
   }else{
        toast.error("checkBox tera Bap Baregaa Loude 😡😡");
    }
   
 }

 let copypass=()=>{
   
    if(fpass!=''){
 navigator.clipboard.writeText(fpass)
 toast.success("Gand Mai Daloo ..😂😂")
    }else{
        toast.warn("Gandu Hai ree Tuuu 😂😂")
 }
    
 }
 let copynaa=()=>{
    toast.warning("Kya Bee copy button hai naa ")
 }

  return (
    <div>
      <Header />
      <h1>Password Generator</h1>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordboxin">
          <input type="text" readOnly  value={fpass} onClick={copynaa}  /> <button onClick={copypass}>Copy</button>
        </div>
        <div className="passlenght">
          <label>Password Length</label>
          <input type="number" min={10} max={20} value={passwlength} onChange={(event)=>{setpasslength(event.target.value)}}></input>
        </div>

        <div className="passlenght">
          <label>Include Upper Case</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setuppercase(!uppercase)}></input>
        </div>

        <div className="passlenght">
          <label>Include Lower Case</label>
          <input type="checkbox" checked={lowercase} onChange={()=>{setlowercase(!lowercase)}}></input>
        </div>
        <div className="passlenght">
          <label>Include Numbers</label>
          <input type="checkbox" checked={number} onChange={()=>{setNumber(!number)}}></input>
        </div>
        <div className="passlenght">
          <label>Include Symbol</label>
          <input type="checkbox" checked={symbol} onChange={()=>setsymbol(!symbol)}></input>
        </div>
        <button className="btn" onClick={createPassword}>Generate password</button>
      </div>
      
      <ToastContainer/>
    </div>
  );
}

export default Home;
