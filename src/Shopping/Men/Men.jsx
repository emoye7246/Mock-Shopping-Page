import { ShopContext } from '../../App'
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Men/Men.css'
import { useState, useEffect, useContext } from 'react'

export const Mens = () => {

    const [menProduct, setmenProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const fetchData = async () => {

            if(loading){

                try{

                    const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
                    await response.json().then((response) => setmenProduct(response))
                    setLoading(false)
                }catch(err){

                    setError(err)
                    setLoading(false)
                }
            }
        }
        fetchData()
    }, [loading])

    if(loading) return <div>Well be with you soon</div>
    if(error) return <div>There seems to be a network issue please check your connection and we will try to see whats going on on our end</div>

    const MensProduct = () => {

        const {addItems} = useContext(ShopContext)
        const listMen = menProduct.map((item, i) => 
            
            <div className='mensContext' key={i}>

                <div className='shopMens'>{item.title}</div>
                <button onClick={() => addItems(item.title)}>Add To Cart</button>

            </div>
        )

        return <>{listMen}</>

    }

    return(

        <>
            <div className="Mens">
                <h2>Shop All Mens Products</h2>

                <div className="mensItems">
                    <MensProduct />
                </div>
            </div>
        </>
    )



}