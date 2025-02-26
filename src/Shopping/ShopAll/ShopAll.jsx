import { useState, useEffect } from "react"
import { useContext } from "react"
import { ShopContext } from "../../App"


export const ShopAll = () => {

    const {addItems} = useContext(ShopContext)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])


    useEffect(() => {

        const fetchData = async () => {

        if(loading){
            try{

                const response = await fetch('https://fakestoreapi.com/products')
                await response.json().then((response) => {

                    console.log(response)
                    setProducts(response)
                })
                setLoading(false)


            }catch(err){
                
                setLoading(false)
                setError(err)
            }

            }
        }

        fetchData()

    }, [])

    if(loading) return <div>Well be with you soon</div>
    if(error) return <div>There seems to be a network issue please check your connection and we will try to see whats going on on our end</div>


    return (

        <>
            <div className="flex flex-col items-center max-w-full min-h-full gap-y-5">

                <h2 className="text-3xl m-10" >Shop All</h2>

                <div className="grid grid-cols-4 grid-rows-5 content-center gap-4">

                    {products.map((item, i) => 

                        <div key={i} className="flex flex-col items-center justify-center gap-y-5">


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