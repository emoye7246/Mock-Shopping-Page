import { Link} from 'react-router-dom'
import { useState} from 'react'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Navbar/Navbar.css'
import bag from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/parcel.png'




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
                    <Link to='cart'>Your Bag</Link>
                    <img src={bag} alt="" height={'20px'} width={'20px'} />
                </div>
            </div>

        </>
    )
}