import { Link} from 'react-router-dom'
import {useState} from 'react'
import bag from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/parcel.png'
import logo from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Logo para marca personal en negro y rosa.png'
import home from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Icons/home .png'
import shoppingBag from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Icons/shopping-bag.png'
import shoppingCart from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Icons/shopping-cart.png'




export const Navbar = () => {
        
    // create a button this button needs a couple things 

    // category, description, price, title, image
    // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;


    return (

        <>

            <div id="Navbar" className='max-w-full flex flex-row justify-between items-center bg-[#413D3A] drop-shadow-md'>

                <div className='myLinks'>
                        <img src={logo} alt="Divine Shopping Logo" className='h-[100px] w-[100px]' />
                </div>
                
                <div className='flex flex-row gap-x-20 text-center'>

                        <Link to='/' className='flex flex-row items-center gap-x-2'>

                            <img src={home} alt="Home_Logo" className='h-[32px] w-[32px]' />
                            <div>Home</div>

                        </Link>


                        <Link to='shopping' className='flex flex-row items-center gap-x-2'>
                            <img src={shoppingBag} alt="shoppingBag" className='h-[32px] w-[32px]' />
                            <div>Shopping</div>
                        </Link>

                </div>

                <div>

                    <Link to='cart' className='flex flex-row gap-x-2 mr-6'>
                        <div>Your Cart</div>
                        <img src={shoppingCart} alt="shoppingCart" className='h-[32px] w-[32px]' />
                    </Link>

                </div>
            </div>

        </>
    )
}