import { useState, useEffect } from 'react'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Jewelry/jewelry.css'


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


        return (
            <>
                {jewelery.map((item, i) => (

                    <>
                        <div className='Jewls'>{item.title}</div>
                    </>
                ))}
            </>
        )
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