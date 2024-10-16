import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(20)
  
    let addvalue=()=>{
    console.log("clicked",counter);
    counter=counter+1
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    
    

  }
  let Decreasevalue=()=>{
    counter=counter-1
    setCounter(counter-1)
    setCounter(counter-1)
    setCounter(counter-1)
    setCounter(counter-1)
    setCounter(counter-1)
  }
  

  return (
    <>
    <h1> Chai or React</h1>
    <h2> Counter Value:{counter}</h2>
    <button onClick={addvalue}>Add Value</button>
    <br></br>
    <br></br>
    <button onClick={Decreasevalue}>Decrease Value</button>
  
    </>
  )
}  

export default App
