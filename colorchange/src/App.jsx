import { useState } from "react"


function App() {
  const[color,setColor]=useState("white")
  

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex felx-wrap justify-center gap-5 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("green")}} className="outline-none rounded-full bg-green-400 px-4 py-2 shadow-lg">green</button>
          <button onClick={()=>setColor("red")}className="outline-none rounded-full bg-red-400 px-6 py-2 shadow-lg">red</button>
          <button onClick={()=>setColor("pink")}className="outline-none rounded-full bg-pink-400 px-6 py-3 shadow-lg">pink</button>
          <button onClick={()=>setColor("yellow")}className="outline-none rounded-full bg-yellow-200 px-4 py-2 shadow-lg">yellow</button>
          <button onClick={()=>setColor("blue")}className="outline-none rounded-full bg-blue-700 px-6 py-2 shadow-lg">blue</button>
          <button onClick={()=>setColor("cyan")}className="outline-none rounded-full bg-cyan-300 px-6 py-2 shadow-lg">cyan</button>
        </div>
        
      </div>
    </div>
 
  )
}

export default App
