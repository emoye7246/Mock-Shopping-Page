import { useState, useEffect } from "react";
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Women/women.css'

export const Womens = () => {

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
    }, [loading])

    if(loading) return <div>Well be with you in one moment</div>
    if(error) return <div>There seems to be a network issue please check your connection and we will try to see whats going on on our end</div>

    const ShopWomens = () => {

        const listProducts = womenProduct.map((item, i )=> 

            <div className="shopWomen" key={i}>{item.title}</div>
        )
        return <>{listProducts}</>
    }

    return (

        <>
            <div className="Womens">
                <h2>Shop all Womens Products</h2>

                <div className="womensItems">
                    
                        <ShopWomens />
                </div>
            </div>
        </>
    )



}