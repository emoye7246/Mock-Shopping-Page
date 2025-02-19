import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { DefaultPage} from './Page/Page'




export const App = () => {


  return (

    <>
        <Navbar />

        <Outlet />
    </>
  )
}