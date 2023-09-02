import React from 'react'
import Header from '../Header/Header'
import { Outlet, RouterProvider } from 'react-router-dom'
import { router } from '../../routes/Router'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>

        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout