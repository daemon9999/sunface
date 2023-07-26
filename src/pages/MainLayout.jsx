import Header from 'src/layouts/Header'
import React from 'react'
import Footer from 'src/layouts/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation()
  return (
    <>
        <Header/>

        <Outlet/>

        {(location.pathname  !== '/forecast' && location.pathname !== '/optimization') &&  <Footer/>}
    </>


  )
}

export default MainLayout