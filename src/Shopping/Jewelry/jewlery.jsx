import { useState, useEffect, useContext } from 'react'
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
            <div className="flex flex-col items-center max-w-full min-h-full gap-y-5">

                    <h2 className="text-3xl m-10" >Shop all of our Jewlerey Brands</h2>

                    <div className="grid grid-cols-4 grid-rows-1">
                        
                        {jewelery.map((item, i) => 
                        
                            <div key={i} className="flex flex-col items-center justify-center gap-y-5">

                                <div className="p-20 h-[300px] w-[300px] bg-white flex items-center justify-center max-w-full">
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