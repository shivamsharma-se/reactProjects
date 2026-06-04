import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'



function App() {
  const [count, setCount] = useState(0)
  let myobj={
    naam:"shivam",
    age:18


  }
  let myarr=[1,2,3,4,5]

  return (
    <>
    <h1 className='bg-green-400 p-4 text-3xl text-black'>Tailwind Test</h1>
     <Card name="shivam" btntext="click badwe"/>  {/*but we cant pass array and object like this  */}
    <Card name="ram" someobj={myobj} somearr={myarr}/> {/*but we can pass array and object like this  */}
    </>
  )
}

export default App
