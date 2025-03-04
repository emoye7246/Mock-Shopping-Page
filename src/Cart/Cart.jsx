import { ShopContext } from '../App'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Cart/Cart.css'
import trash from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Icons/trash.png'
import {useContext, useState } from 'react'

export const Cart = () => {

    const {cart, subtotal, setCart, setSubtotal, setCartItems} = useContext(ShopContext)

    const Checkout = () => {

        let checkout = setInterval(() => {

            <div>Please Wait</div>

        }, 3000)

        clearInterval(() => checkout)

        setCart([])
        setSubtotal(0)
        setCartItems(0)
    }

    const removeItems = (id, quantity, price) => {

        setCart(prevItems => prevItems.filter(item => item.id !== id))
        setSubtotal(prevPrice => prevPrice - (quantity * price))
        setCartItems(cart.length - 1)
    }
    




    return (

        <>

            <div className='max-w-full h-screen flex flex-row justify-between overflow-hidden font-[Crimson] keyframes' id='Cart'>

                <div className='flex flex-col max-w-fit relative top-20 left-40'>

                    <div className=' flex flex-col'>

                        <div className='text-[#BD8E89] text-4xl font-[Crimson] mb-5'>Your Shopping Cart</div>
                        <hr className='border-black w-80' />

                    </div>

                    <div className='flex flex-row gap-x-2 justify-end text-end'>
                                <div>Subtotal:</div>
                                <div className='text-[20px]'> $ {Math.max(0, subtotal.toFixed(2))}</div>
                        </div>

                    <div className='max-w-fit flex flex-col overflow-y-scroll gap-y-10'>

                        {
                            cart.map((item, i) => 
                                
                                <div className='flex flex-row mt-10 gap-x-10 text-center pb-5' key={i}>

                                    <div className='flex flex-col max-w-fit min-h-full items-center text-center w-[100px] h-[150px] bg-white'>

                                        <img src={item.image} alt="productImage" className='object-contain object-center' />
                                        
                                    </div>
                                    <div> Title: {item.title}</div>
                                    <div>Quantity: {item.quantity}</div>
                                    <div className='flex'>Price: ${item.price}</div>
                                    
                                    <img src={trash} alt="trash icon" className='h-[24px] w-[24px] cursor-pointer' onClick={() => removeItems(item.id, item.quantity, item.price)} />
                                    

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

                                </select>
                            </div>

                            <label htmlFor="cardNumber" className='flex flex-col gap-y-3'>
                                <div>Card Number</div>
                                <input type="text" className='border-b-1 outline-0' placeholder='XXXX-XXXX-XXXX' minLength={16}  required />
                            </label>


                            <div className='flex flex-row justify-between'>

                                <label htmlFor="expiry" className='flex flex-col gap-x-3'>
                                    <div className='mb-4'>Expiry Date</div>

                                    <div className='flex flex-row gap-x-5'>

                                        <input type="text" name="month" id="month" className='border-b-1 max-w-5' min={1} max={12} required />

                                        <div className='border-l border-black rotate-10'></div>

                                        <input type="text" name="year" id="year" className='border-b-1 max-w-5' min={2025} max={2080} required/>
                                        
                                    </div>
                                </label>

                                <label htmlFor="Cvv">
                                    <div className='mb-4'>Cvv</div>
                                    <input type="text" name='Code' id='Code' className='border-b-1 max-w-5' required minLength={3} maxLength={3} />
                                </label>
                            </div>
                            
                        </form>

                        <div className='flex w-full bg-[#747373] p-8 justify-center items-center cursor-pointer hover:bg-black'>
                            <div className='text-white font-[Crimson]' onClick={() => Checkout()}>Checkout: {subtotal}</div>
                        </div>


                    </div>

                </div>

        </>
    )
}