import { useState, useEffect } from "react"
import { useContext } from "react"
import { ShopContext } from "../../App"

export const Electronics = () => {

    const {addItems} = useContext(ShopContext)
    
    const [electronics, updateElectronics] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [error, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            if(loading){
                
                try {

                const response = await fetch('https://fakestoreapi.com/products/category/electronics')
                await response.json().then((response) => {

                    updateElectronics(response)
                    setLoading(false)
                })
                }
                catch(err) {

                    setErrors(err)
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
           <div className="flex flex-col items-center max-w-full min-h-full gap-y-5">

                <h2 className="text-3xl m-10" >Shop all Electronics</h2>

                        
                        <div className="grid grid-cols-3 grid-rows-2 content-center gap-4">
                            {electronics.map((item, i) => 

                                <div className="flex flex-col items-center justify-center gap-y-5" key={i}>

                                    <div className="p-20 h-[300px] w-[300px] bg-white flex items-center justify-center max-w-full">
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div>{item.title}</div>
                                    <label htmlFor="quantity" className="flex flex-row gap-x-2">
                                        <div>Quantity</div>
                                        <input type="number" placeholder="0" name="quantity" id="quantity" className="border-1 border-black w-10 text-center rounded-[5px]" onChange={(e) => setQuantity(e.target.value) }/>
                                    </label>
                                    <div>${item.price}</div>

                                    <button onClick={() => addItems(item.image, item.title, quantity, item.price )}>Add To Cart</button>

                                </div>
                            
                            )}
                        </div>
           </div>
        </>
    )
}