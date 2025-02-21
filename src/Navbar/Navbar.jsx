import { Link} from 'react-router-dom'
import { useState} from 'react'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Navbar/Navbar.css'




export const Navbar = () => {
        
    // create a button this button needs a couple things 

    // category, description, price, title, image


    return (

        <>

            <div id="Navbar">

                <div className='myLinks'>
                        <div>Login</div>
                        <div>Sign Up</div>
                </div>
                
                <div className="myLinks">
                    <Link to='/'>Home</Link>
                    <Link to='shopping'>Shop</Link>
                </div>

                <div className='myLinks'>
                    <div>Your Cart</div>
                    <div>Shopping Cart Image</div>
                </div>
            </div>

        </>
    )
}