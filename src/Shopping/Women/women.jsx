import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../App";

export const Womens = () => {
    const {addItems} = useContext(ShopContext)
    const [womenProduct, setWomen] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {

            if(loading){

                try{

                    const response = await fetch(`https://fakestoreapi.com/products/category/women's clothing`)
                    await response.json().then((response) => setWomen(response))
                    setLoading(false)
                }catch(err){

                    setError(err)
                    setLoading(false)
                }
            }
        }

        fetchData()
    }, [])

    if(loading) return <div>Well be with you in one moment</div>
    if(error) return <div>There seems to be a network issue please check your connection and we will try to see whats going on on our end</div>


    return (

        <>
            <div className="flex flex-col items-center max-w-full min-h-full gap-y-5" >

                <h2 className="text-3xl m-10" >Shop all Womens Products</h2>

                <div className="grid grid-cols-3 grid-rows-2 content-center gap-4">

                    {womenProduct.map((item, i) => 


                            <div className="flex flex-col items-center justify-center gap-y-5" key={i}>


                                <div className="p-20 h-[300px] w-[300px] bg-white flex items-center justify-center max-w-full">
                                    <img src={item.image} alt="" />
                                </div>

                                    <div>{item.title}</div>
                                    <div>${item.price}</div>

                                <button onClick={() => addItems(item.title)}>Add to Cart</button>
                            </div>
                    )}
                </div>

            </div>
        </>
    )



}