import {useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Crimson from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Fonts/Crimson_Text/CrimsonText-Regular.ttf'
import { ShopContext } from "../App"

// Links still need to be created for the homepage boxdes

export const HomePage = () => {

    const {addItems} = useContext(ShopContext)

    const [quantity, setQuantity] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            
            if(loading){
                try{
                    const response = await fetch('https://fakestoreapi.com/products')
                    await response.json().then((response) => {
                        
                        setProducts(response)
                        console.log(response)

                    })
                    setLoading(false)
                }
                catch(err){

                    setError(err)
                    setLoading(false)
                }
            }
        }
        fetchData()
    }, [])

    if(loading) return <div>Wait one moment</div>
    if(error) return <div>Something has went wrong</div>


    
    


    return (

        <>
                    <div className="max-w-full flex flex-row keyframes" id='Homepage' >

                            <div className="flex flex-col justify-center items-center w-full bg-[#747373] font-[Crimson]">
                                        
                                        <div className='text-start text-[64px] text-[#FFECDA]'>
                                            <div>Shop</div>
                                            <div>Mens</div>
                                        </div>
                                        <Link to='shopping/mens'>
                                            <button className='border-1 border-black h-[36px] w-[260px] bg-black text-[#FFECDA] rounded-[10px] hover:bg-[#292929]'>Shop Now</button>
                                        </Link>

                            </div>

                            <div className="flex w-full bg-white ">
                                      
                                        <img src={products[1].image} alt="display" className='w-[1002px] h-[512px] flex-shrink-0 object-cover object-top'/>
                            </div>

                    </div>

                    <div className="flex flex-col items-center justify-center max-w-full bg-[#FFECDA]">
                        <div className="flex flex-col items-center ">
                            <h2 className="mt-10 text-[40px] text-black">New Arrivals</h2>

                            <div className="mt-10 mb-7 text-[24px] text-black">Find your ideal product</div>
                        </div>

                            <div className='grid grid-cols-4 grid-rows-1 content-between gap-12'>

                                {[
                                    products[3],
                                    products[6],
                                    products[2],
                                    products[5]
                                ].map((item, i) => 
                                    
                                    <div key={i} className="flex flex-col items-center justify-center gap-y-5">
                                        
                                        <div className="p-20 h-[300px] w-[300px] bg-white flex items-center justify-center max-w-full rounded-2xl">
                                            <img src={item.image} alt="" />
                                        </div>


                                            <div>{item.title}</div>
                                            <label htmlFor="mensQuanity" className="flex flex-row gap-x-2">
                                                <div>Quanitity</div>
                                                <input type="number" min={0} max={10} name="mensQuantity" id="mensQuantity" className="border-1 border-black w-10 text-center rounded-[5px] bg-white" onChange={(e) => setQuantity(e.target.value)} />
                                            </label>
                                            <div>${item.price}</div>
                                            <button onClick={() => addItems(item.image, item.title, quantity, item.price)}>Add to Cart</button>





                                    </div>
                                )
                                }

                            </div>
                    </div>

                    <div className="flex items-center justify-center bg-[#FFECDA]">
                        <h2 className="text-3xl mt-10">Quick Links</h2>
                    </div>

                    <div className="min-w-fit min-h-max flex flex-row items-center justify-center">

                            <div className="flex flex-col items-center justify-center">

                                    <div className="w-[50vw] h-[61vh] border-1 border-black overflow-clip cursor-pointer">

                                        <Link to='shopping/mens'>
                                            <div>Mens</div>
                                            <img src={products[3].image} alt="" className="object-contain object-center"/>
                                        </Link>

                                        
                                    </div>

                                <div className="flex flex-row">
                                    
                                    <div className="w-[25vw] h-[36vh] border-1 border-black overflow-clip cursor-pointer">

                                        <Link to='shopping/electronics'>
                                            <div>Electronics</div>
                                            <img src={products[8].image} alt="" className="object-contain object-center"/>
                                        </Link>



                                    </div>

                                    <div className="w-[25vw] h-[36vh] border-1 border-black overflow-clip cursor-pointer">

                                        <Link to='shopping/jewelery'>
                                            <div>Jewlerey</div>
                                            <img src={products[6].image} alt="" className="object-contain object-center"/>
                                        </Link>


                                    </div>

                                </div>
                                
                            </div>

                            <div className="flex flex-col">

                                    <div className="w-[50vw] h-[36vh] border-1 border-black overflow-clip cursor-pointer">

                                        <Link to='shopping/shopAll'>
                                            <div>Shop All</div>
                                            <img src={products[10].image} alt="" className="object-contain object-right"/>
                                        </Link>


                                    </div>
                                    <div className="w-[50vw] h-[61vh] border-1 border-black overflow-clip cursor-pointer">

                                        <Link to='shopping/womens'>
                                            <div>Shop Womens</div>
                                            <img src={products[15].image} alt="" className="object-contain object-right"/>
                                        </Link>


                                    </div>

                            </div>

                    </div>



        </>
    )
}