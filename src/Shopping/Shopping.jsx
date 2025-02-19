import { useEffect, useState } from "react"
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Shopping.css'
import { Link, Outlet } from "react-router-dom"

export const Shopping = () => {


    // 'electronics', 'jewelery', "men's clothing", "women's clothing"

    return (

        <>
            <div id="Shopping">

                <div id="shopBy">
                    <Link to='electronics'>Electronics</Link>
                    <Link to='jewelery'>Jewlery</Link>
                    <Link to='mens'>Mens</Link>
                    <Link to='womens'>Womens</Link>
                    
                </div>
                <hr />
                <div>
                    <Outlet />
                </div>                
            </div>

        </>
    )
    
}