import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='fixed flex flex-wrap bg-white px-3  py-2  h-20 justify-center gap-3 shadow-lg rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full w-20 h-10 text-white' style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full w-20 h-10 text-white' style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>Red</button><button className='outline-none px-4 py-1 rounded-full w-20 h-10 text-white' style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>Red</button><button className='outline-none px-4 py-1 rounded-full w-20 h-10 text-white' style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>Red</button><button className='outline-none px-4 py-1 rounded-full w-20 h-10 text-white' style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>Red</button><button className='outline-none px-4 py-1 rounded-full w-20 h-10 text-white' style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>Red</button><button className='outline-none px-4 py-1 rounded-full w-20 h-10 text-white' style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>Red</button>
          </div>

        </div>

      </div>


    </>
  )
}

export default App
