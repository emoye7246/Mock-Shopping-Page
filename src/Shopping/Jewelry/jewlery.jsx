import { useState, useEffect, useContext } from 'react'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Jewelry/jewelry.css'
import { ShopContext } from '../../App'


export const Jewelry = () => {
    const {addItems} = useContext(ShopContext)
    const [jewelery, updateJewlery] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            
            try{
                const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
                await response.json().then((response) => {

                    updateJewlery(response)
                })
            }catch(error){

                console.error(error)
            }
            
        }
        fetchData()
    }, [])


    return (

        <>
            <div  className="Jewelery">
                <h2 id='header'>Shop all of our Jewelwey Brands</h2>
                

                    <div className="gridContainer">
                        {jewelery.map((item, i) => 
                        
                            <div key={i} className='productInfo'>

                                <div className="imageContainer">
                                    <img src={item.image} alt="" />
                                </div>

                                <div>{item.title}</div>
                                <div>${item.price}</div>

                                <button onClick={() => addItems(item.title)}>Add To Cart</button>

                            </div>
                        )}
                    </div>
            </div>
        </>
    )

}