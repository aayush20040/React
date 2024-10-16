import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import BasicCard from './components/Red'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black rounded-xl p-10'>talwind test</h1> 
      <BasicCard/>
      <BasicCard />


    </>
  )
}

export default App
