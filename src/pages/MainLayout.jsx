import Header from 'src/layouts/Header'
import React from 'react'
import Footer from 'src/layouts/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useModals } from 'src/utils/modal'
import Modal from 'src/components/modals'

const MainLayout = () => {
    const location = useLocation()
    const modals = useModals()
  return (
    <>
        {modals.length > 0 && <Modal/>}
        <Header/>

        <Outlet/>

        {(location.pathname  !== '/forecast' && location.pathname !== '/optimization') &&  <Footer/>}
    </>


  )
}

export default MainLayout