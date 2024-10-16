import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'

function Myapp(){
  return(
    <div>
    <h1>custom app</h1>
  </div>
  )

  
}

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click here'
)
createRoot(document.getElementById('root')).render(
  reactElement
)

