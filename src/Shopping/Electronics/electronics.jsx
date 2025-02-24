import { useState, useEffect } from "react"
import { useContext } from "react"
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Electronics/electronics.css'
import { ShopContext } from "../../App"

export const Electronics = () => {

    const {addItems} = useContext(ShopContext)
    
    const [electronics, updateElectronics] = useState([])
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
           <div className="Electronics">

                <h2 id="header">Shop All Electronics</h2>
                        
                        <div className="gridContainer">
                            {electronics.map((item, i) => 

                                <div className="electronicInfo" key={i}>

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