import { ShopContext } from '../../App'
import { useState, useEffect, useContext } from 'react'

export const Mens = () => {
    const {addItems} = useContext(ShopContext)
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
    }, [])

    if(loading) return <div>Well be with you soon</div>
    if(error) return <div>There seems to be a network issue please check your connection and we will try to see whats going on on our end</div>

    return(

    

        <>
            <div className="Mens">

                    <div id='header'>Shop Mens</div>

                    <div className="menProduct">
                        {menProduct.map((item, i) => 

                            <section id='display'>

                                <div className='productDetails' key={i}>
                                    
                                    <div id="images">
                                        <img src={item.image} alt="" />
                                    </div>

                                </div>

                                    <div id="information">

                                        <div className="title">{item.title}</div>
                                        <div>${item.price}</div>
                                    </div>

                                    <div id='checkout'>
                                        <button onClick={() => addItems(item.title)}>Add To cart</button>
                                    </div>
                            </section>



                        )}
                    </div>

            </div>
        </>
    )



}