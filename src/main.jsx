import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Shopping } from './Shopping/ShopAll/Shopping'
import { ShopAll } from './Shopping/ShopAll/ShopAll'
import { Electronics } from './Shopping/Electronics/electronics'
import { HomePage } from './HomePage/HomePage'
import { Jewelry } from './Shopping/Jewelry/jewlery'
import { Mens } from './Shopping/Men/Men'
import { Womens } from './Shopping/Women/women'
import { Cart } from './Cart/Cart'


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'shopping', 
        element: <Shopping />,
        children: [
          {index: true, element: <ShopAll/>},
          {path: 'electronics', element: <Electronics />},
          {path: 'jewelery', element: <Jewelry />},
          {path: 'mens', element: <Mens />},
          {path: 'womens', element: <Womens />},
          {path: 'shopAll', element: <ShopAll/>},

        ]
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
