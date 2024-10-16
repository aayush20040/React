import { useState } from 'react'
import Header from './assets/components/header/header'
import Footer from './assets/components/footer/footer'
import Home from './assets/components/main/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
     
    </>
  )
}

export default App
