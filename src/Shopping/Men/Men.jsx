import { ShopContext } from '../../App'
import { useState, useEffect, useContext } from 'react'


export const Mens = () => {
    const {addItems} = useContext(ShopContext)
    const [menProduct, setmenProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const fetchData = async () => {

            if(loading){

                try{

                    const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
                    await response.json().then((response) => {
                        console.log(response)
                        setmenProduct(response)})
                    
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
            <div className="flex flex-col items-center max-w-full min-h-full keyframes" id='Mens' >

                <div>
                    <h2 className="text-3xl m-10 mb-4 text-[#BD8E89]" style={{fontFamily: 'Crimson'}} >Shop all Mens Products</h2>
                    <hr />
                </div>

                <div className='grid grid-cols-4 grid-rows-1 content-between gap-4'>
                     
                    {menProduct.map((item, i) => 
                    
                        <div className="flex flex-col items-center justify-center gap-y-5" key={i}>


                            <div className="p-20 h-[300px] w-[300px] bg-white flex items-center justify-center max-w-full">
                                <img src={item.image} alt="" />
                            </div>

                                <div>{item.title}</div>
                                <label htmlFor="mensQuanity" className="flex flex-row gap-x-2">
                                    <div>Quanitity</div>
                                    <input type="number" min={0} max={10} name="mensQuantity" id="mensQuantity" className="border-1 border-black w-10 text-center rounded-[5px]" onChange={(e) => setQuantity(e.target.value)} />
                                </label>
                                <div>${item.price}</div>

                            <button onClick={() => addItems(item.image, item.title, quantity, item.price)} className="w-[150px] h-[50px] border-gray-100 border-2 bg-[#ffd8d5] rounded-[14px] hover:bg-[#ffa8a2]" >Add to Cart</button>
                        </div>
                    )}

                </div>
                

            </div>
        </>
    )



}