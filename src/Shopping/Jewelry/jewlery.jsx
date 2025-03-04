import { useState, useEffect, useContext } from 'react'
import { ShopContext } from '../../App'
import Crimson from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Fonts/Crimson_Text/CrimsonText-Regular.ttf'



export const Jewelry = () => {
    const {addItems} = useContext(ShopContext)
    const [jewelery, updateJewlery] = useState([])
    const [quantity, setQuantity] = useState(0)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            
            try{
                const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
                await response.json().then((response) => {

                    updateJewlery(response)
                })
                setLoading(false)
            }catch(err){

                setError(err)
                setLoading(false)
            }
            
        }
        fetchData()
    }, [])

    if(loading) return <div>Please Wait while we find your products</div>
    if(error) return <div>There seems to be a connectivity issue please refresh this page sorry for the incovience</div>


    return (

        <>
            <div className="flex flex-col items-center max-w-full min-h-full gap-y-5 keyframes" id='Jewlry'>

                    <div>
                        <h2 className="text-3xl m-10 mb-4 text-[#BD8E89] font-[Crimson]" >Shop all of our Jewlerey Brands</h2>
                        <hr />
                    </div>

                    <div className="grid grid-cols-4 grid-rows-1">
                        
                        {jewelery.map((item, i) => 
                        
                            <div key={i} className="flex flex-col items-center justify-center gap-y-5">

                                <div className="p-20 h-[300px] w-[300px] bg-white flex items-center justify-center max-w-full">
                                    <img src={item.image} alt="" />
                                </div>

                                <div>{item.title}</div>
                                <label htmlFor="mensQuanity" className="flex flex-row gap-x-2">
                                    <div>Quanitity</div>
                                    <input type="number" min={0} max={10} name="mensQuantity" id="mensQuantity" className="border-1 border-black w-10 text-center rounded-[5px]" onChange={(e) => setQuantity(e.target.value)} />
                                </label>
                                <div>${item.price}</div>

                            <button onClick={() => addItems(item.image, item.title, quantity, item.price)}>Add to Cart</button>

                            </div>
                        )}
                    </div>
            </div>
        </>
    )

}