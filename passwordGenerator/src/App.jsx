import { useCallback, useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import img from './assets/1.jpg'
import './App.css'

function App() {
  const [len,setLength]=useState(10)
  const [pass,setpassWord]=useState("")
  const [num,allowedNum]=useState(false)
  const [sym,allowedSym]=useState(false)
  const passgen=useCallback(()=>{
    let temp=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str +="0123456789"
    if (sym) str +="!@#$%^&*-_+=[]{}~`"
    for(let i=0;i<len;i++){
      let a=Math.floor(Math.random()*str.length+1)
      temp+=str.charAt(a)
    }
    setpassWord(temp)

    
  },[num,sym,len])
  // copy the pass
  let passref=useRef(null)
  const copy=useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(pass);
  },[pass])
  useEffect(()=>{
    passgen()
  },[num,sym,len])
  return (
    <>
    <div className='flex justify-center h-screen w-screen items-center ' >
      <div className='isolate flex h-70 w-110  justify-center items-center flex-col gap-10 aspect-video  rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5'>
        <h1 className="text-4xl text-white font-extrabold text-heading">Password Generator</h1>
        <div className='flex gap-2'>
          <input type="text" 
          value={pass}
          readOnly  className='bg-white rounded-xl w-80'
          ref={passref}/>
          <button className='text-white  bg-blue-500 bg-brand box-border border border-transparent rounded-xl shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none' onClick={copy}>Copy</button>
        </div>
        <div className='flex gap-4 text-white'>
          <div className='flex gap-2'><input type="range" value={len} onChange={(e)=>{setLength(e.target.value)}}/><label htmlFor="">Length({len})</label></div>
          <div className='flex gap-2'><input type="checkbox" min={6} max={100} onChange={()=>{allowedNum(!num)}}/><label htmlFor="">Number</label></div>
          <div className='flex gap-2'><input type="checkbox" onChange={()=>{allowedSym(!sym)}}/><label htmlFor="">Symbol</label></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
