import { useState, useEffect, useContext } from 'react'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Jewelry/jewelry.css'
import { ShopContext } from '../../App'


export const Jewelry = () => {

    const [jewelery, updateJewlery] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            
            try{
                const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
                await response.json().then((response) => {

                    console.log(response)
                    updateJewlery(response)
                })
            }catch(error){

                console.error(error)
            }
            
        }
        fetchData()
    }, [])

    const Jewls = () => {

            const {addItems} = useContext(ShopContext)
            
            const listItem = jewelery.map((item, i) => (

                    <div key={i} className='jewleryI'>

                        <div className='Jewls'>{item.title}</div>
                        <button onClick={() => addItems(item.title)}>Add To Cart</button>

                    </div>
                ))

                return <>{listItem}</>
    }

    return (

        <>
            <div className="Jewelery">
                <h2>Shop all of our Jewelwey Brands</h2>
                
                <div className="jeweleryItems">
                    <Jewls />
                </div>
            </div>
        </>
    )

}