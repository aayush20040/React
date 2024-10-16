import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './assets/components/main/Main.jsx'
import Contact from './assets/components/contactus/Contact.jsx'
import About from './assets/components/about/About.jsx'
const router=createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:"",
    element:<Home/>
  }
,{
  path:"contact",
  element:<Contact/>
},{
  path:"about",
  element:<About/>
}]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
