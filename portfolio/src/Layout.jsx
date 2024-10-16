import React from 'react'
import Header from './assets/components/header/header'
import Footer from './assets/components/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout
