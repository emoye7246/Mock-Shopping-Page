import { Link} from 'react-router-dom'
import {useContext} from 'react'
import { ShopContext } from '../App'
import { myIcons } from '../icons'

export const Navbar = () => {
        
    const {cartItems} = useContext(ShopContext)

    return (

        <>

            <div id="Navbar" className='max-w-full flex flex-row justify-between items-center bg-[#413D3A] drop-shadow-md m-0 text-white'>

                <div className='myLinks'>
                        <img src={myIcons.logo} alt="Divine Shopping Logo" className='h-[100px] w-[100px]' />
                </div>
                
                <div className='flex flex-row gap-x-20 text-center'>

                        <Link to='/' className='flex flex-row items-center gap-x-2'>

                            <img src={myIcons.home} alt="Home_Logo" className='h-[32px] w-[32px]' />
                            <div>Home</div>

                        </Link>


                        <Link to='shopping' className='flex flex-row items-center gap-x-2'>
                            <img src={myIcons.shoppingBag} alt="shoppingBag" className='h-[32px] w-[32px]' />
                            <div>Shopping</div>
                        </Link>

                </div>

                <div>

                    <Link to='cart' className='flex flex-row gap-x-2 mr-6'>
                        <div>Your Cart</div>
                        <img src={myIcons.shoppingCart} alt="shoppingCart" className='h-[32px] w-[32px]' />
                        <div className='border-2 bg-[#ffd8d5] text-white w-8 h-8 rounded-2xl text-center items-center justify-center'  >
                                <div>{cartItems}</div>
                        </div>
                    </Link>

                </div>
            </div>

        </>
    )
}