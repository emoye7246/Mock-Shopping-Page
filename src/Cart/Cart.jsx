import { ShopContext } from '../App'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Cart/Cart.css'
import {useContext } from 'react'

export const Cart = () => {

    const {cart} = useContext(ShopContext)

    const CartItems = () => {

        const listItems = cart.map((item, i) => 

            <div key={i} className="myItemsContent">
                
               <img src="" alt="" height={'200px'} width={'200px'}/>

                <div>{item.title}</div>

                <div className="price">Price: </div>
                    
            </div>
        )
        

        return <>{listItems}</>
       
    }


    return (

        <>
               <div className="Cart">

                    <h2 id='header'>Review Your Bag</h2>

                    
                        <CartItems />
                    
                    <div className="checkoutPage">

                        <div>Items: </div>
                        <div>Total: </div>
                        <hr />
                    </div>
                    <button>Checkout</button>


               </div>
        </>
    )
}