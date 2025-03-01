import { ShopContext } from '../App'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Cart/Cart.css'
import {useContext, useState } from 'react'

export const Cart = () => {

    const {cart, subtotal} = useContext(ShopContext)




    return (

        <>

            <div className='max-w-full h-screen flex flex-row justify-between overflow-hidden font-[Crimson]'>

                <div className='flex flex-col max-w-fit relative top-20 left-40'>

                    <div className=' flex flex-col'>

                        <div className='text-[#BD8E89] text-4xl font-[Crimson] mb-5'>Your Shopping Cart</div>
                        <hr className='border-black w-80' />


                    </div>

                    <div className='flex flex-row gap-x-2 justify-end text-end'>
                                <div>Subtotal:</div>
                                <div className='text-[20px]'> $ {subtotal}</div>
                        </div>

                    <div className='max-w-fit  flex flex-col overflow-y-scroll gap-y-10'>

                        {
                            cart.map((item, i) => 
                                
                                <div className='flex flex-row mt-10 gap-x-10 text-center pb-5' key={i}>

                                    <div className='flex flex-col max-w-fit min-h-full items-center text-center w-[100px] h-[150px] bg-white'>

                                        <img src={item.image} alt="productImage" className='object-contain object-center' />
                                        
                                    </div>
                                    <div> Title: {item.title}</div>
                                    <div>Quantity: {item.quantity}</div>
                                    <div className='flex'>Price: ${item.price}</div>

                                </div>
                            )
                        }



                    </div>

                </div>

                
                <div className='max-w-full h-full bg-[#FFECDA] flex flex-col justify-between'>

                        
                        <form className='flex flex-col justify-evenly text-start gap-y-28 p-20'>

                                <div className='text-[20px] border-b border-black'>Card Details</div>

                            <div className='flex flex-col gap-y-10'>
                                <div>Select Card Type</div>

                                <select name="" id="" className='outline-0 border-b'>

                                        <option value="Debit">Debit</option>
                                        <option value="Credit">Credit</option>
                                        <option value="Gift">Gift Card</option>

                                    {/* There we go */}


                                </select>
                            </div>

                            <label htmlFor="cardNumber" className='flex flex-col gap-y-3'>
                                <div>Card Number</div>
                                <input type="text" className='border-b-1 outline-0' placeholder='XXXX-XXXX-XXXX' />
                            </label>


                            <div className='flex flex-row justify-between'>

                                <label htmlFor="expiry" className='flex flex-col gap-x-3'>
                                    <div className='mb-4'>Expiry Date</div>

                                    <div className='flex flex-row gap-x-5'>

                                        <input type="text" name="month" id="month" className='border-b-1 max-w-5' />

                                        <div className='border-l border-black rotate-10'></div>

                                        <input type="text" name="year" id="year" className='border-b-1 max-w-5' />
                                        
                                    </div>
                                </label>

                                <label htmlFor="Cvv">
                                    <div className='mb-4'>Cvv</div>
                                    <input type="text" name='Code' id='Code' className='border-b-1 max-w-5'  />
                                </label>
                            </div>
                            
                        </form>

                        <div className='flex w-full bg-[#747373] p-8 justify-center items-center cursor-pointer hover:bg-black'>
                            <div className='text-white font-[Crimson]'>Checkout: {subtotal}</div>
                        </div>


                    </div>

                </div>

        </>
    )
}