import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0);
  function stcounter(){
    setTimeout(()=>{
      setcounter(counter+1);
    },1000)

  }
  
  return (
    

    <>
    <h1>{counter}</h1>
    <button onClick={stcounter}>start counter</button>
  

    
    </>
    
  )
}

export default App
