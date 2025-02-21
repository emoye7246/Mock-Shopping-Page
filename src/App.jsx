import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const ShopContext = createContext({})


export const App = () => {

  const [cart, setCart] = useState([])


  const addItems = (title) => {

    const newItem = {id: crypto.randomUUID(), title: title}
    setCart(prevItem => [...prevItem, newItem])
    console.log(cart)
  }


  return (

    <>
        <ShopContext.Provider value={{cart, addItems}}>
            <Navbar />

            <Outlet />
        </ShopContext.Provider>
    </>
  )
}