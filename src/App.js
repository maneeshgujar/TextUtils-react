// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About'; //remove about because github pages does not support routing
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import React from 'react'

// for deployment use - deployment create-react-app gh pages
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
const [mode,setMode]= useState('light');
const [alert, setAlert]=useState(null);

let showalert=(msg,type)=>{
  setAlert({msg:msg,type:type}) //object
  setTimeout(()=>{
    setAlert(null)
  },1000)
  // setInterval(() => {
  //   document.title='ads'
  // }, 1200);
}

let toggleMode=()=>{
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor="#23114a"
  showalert('Dark Mode Enabled ','success');
  // document.title='TextUtils-Dark'

  }
  else{
  setMode('light')
  document.body.style.backgroundColor="white"
  }
}


  return (
    <div>
      
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} showalert={showalert}/>
      <Alert alert={alert}/>
      <Router>
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<Textarea text="Enter The Text To Analyse Below" mode={mode} showalert={showalert}/>}/> 
        </Routes>
         </Router> 
      {/* <Textarea text="Enter The Text To Analyse Below" mode={mode} showalert={showalert}/> */}
      {/* <About/> */}
    </div>
  );
}

export default App;
