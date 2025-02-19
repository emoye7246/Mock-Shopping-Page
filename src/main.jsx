import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Shopping} from './Shopping/Shopping'
import { ShopDefault } from './Shopping/shopDefault'
import { Electronics } from './Shopping/Electronics/electronics'
import { DefaultPage } from './Page/Page'
import { Jewelry } from './Shopping/Jewelry/jewlery'
import { Mens } from './Shopping/Men/Men'
import { Womens } from './Shopping/Women/women'


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <DefaultPage />},
      {
        path: 'shopping', 
        element: <Shopping />,
        children: [
          {index: true, element: <ShopDefault />},
          {path: 'electronics', element: <Electronics />},
          {path: 'jewelery', element: <Jewelry />},
          {path: 'mens', element: <Mens />},
          {path: 'womens', element: <Womens />}
        ]
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
