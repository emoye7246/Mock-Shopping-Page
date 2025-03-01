import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const ShopContext = createContext(null)


export const App = () => {

  const [cart, setCart] = useState([])
  const [subtotal, setSubtotal] = useState(0)



  const addItems = (image, title, quantity, price) => {

    const newItem = {id: crypto.randomUUID(),image: image, title: title, quantity: quantity, price: price }
    setCart(prevItem => [...prevItem, newItem])
    console.log(cart)

    setSubtotal(prevTotal => (quantity * price) + prevTotal)
  }


  return (

    <>
        <ShopContext.Provider value={{cart, subtotal,  addItems}}>
            <Navbar />

            <Outlet />
        </ShopContext.Provider>
    </>
  )
}