import { ShopContext } from '../App'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Cart/Cart.css'
import {useContext } from 'react'

export const Cart = () => {

    const {cart} = useContext(ShopContext)


    return (

        <>

            <div className='flex flex-col w-fit justify-center mt-[50px] ml-[50px]'>
                <div className='text-[64px] text-[#BD8E89]'>Your Shopping Cart</div>
                <hr />
            </div>

               <div className='flex flex-row max-w-full justify-between mr-[10px] ml-[10px] p-10' >


                    <div className='flex flex-col items-start'>
                        {
                                    cart.map((item, i) => 
            
                                        <div className='flex flex-row items-center text-start max-w-full min-h-full justify-evenly gap-x-[10px]' key={i}>
                                            
                                            <div className='flex object-contain w-[150px] h-[100px] p-5 bg-white'>
                                                <img src={item.image} alt="" />
                                        </div>
                                        <div>{item.title}</div>
                                        <div>{item.quantity}</div>
                                        <div>{item.price}</div>
                            
                                        </div>
                                    )
                        }
                    </div>

                    <div className=' max-w-full min-h-full'>

                        <form className='flex flex-col gap-y-[20px]'>
                            <select className='outline-none' >
                                <option value="Debit">Debit</option>
                                <option value="Credit">Credit</option>
                                <option value="Gift Card">Gift Card</option>
                            </select>
                            <hr />
                            
                        </form>

                    </div>




               </div>
        </>
    )
}