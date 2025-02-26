import {useEffect, useState } from "react"
import Crimson from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Fonts/Crimson_Text/CrimsonText-Regular.ttf'

export const HomePage = () => {

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
                    <div className="max-w-full flex flex-row" >

                            <div className="flex flex-col justify-center items-center w-full bg-[#747373] font-[Crimson]">
                                        
                                        <div className='text-start text-[64px] text-[#FFECDA]'>
                                            <div>Shop</div>
                                            <div>Mens</div>
                                        </div>
                                       <button className='border-1 border-black h-[36px] w-[260px] bg-black text-[#FFECDA] rounded-[10px] hover:bg-[#292929]'>Shop Now</button>

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

                            <div className=" grid grid-cols-4 grid-rows-1 max-w-full gap-x-10">

                                {[
                                    products[0],
                                    products[3],
                                    products[7],
                                    products[15]
                                ].map((item, i) => 
                                    
                                    <div key={i} className="flex flex-col gap-y-10">
                                        
                                        <div className="w-[300px] h-[300px] bg-white rounded-[14px]">
                                            <img src={item.image} alt="" className="w-[300px] h-[300px] object-contain object-center"/>
                                        </div>

                                        <div className="text-center text-black flex flex-col gap-y-10" >

                                            <div>{item.title}</div>
                                            <div>${item.price}</div>

                                        </div>

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

                                        <div>Mens</div>
                                        <img src={products[3].image} alt="" className="object-contain object-center"/>
                                        
                                    </div>

                                <div className="flex flex-row">
                                    
                                    <div className="w-[25vw] h-[36vh] border-1 border-black overflow-clip cursor-pointer">

                                        <div>Electronics</div>
                                        <img src={products[8].image} alt="" className="object-contain object-center"/>


                                    </div>

                                    <div className="w-[25vw] h-[36vh] border-1 border-black overflow-clip cursor-pointer">
                                        <div>Jewlerey</div>
                                        <img src={products[6].image} alt="" className="object-contain object-center"/>
                                    </div>

                                </div>
                                
                            </div>

                            <div className="flex flex-col">

                                    <div className="w-[50vw] h-[36vh] border-1 border-black overflow-clip cursor-pointer">

                                        <div>Shop All</div>
                                        <img src={products[10].image} alt="" className="object-contain object-right"/>

                                    </div>
                                    <div className="w-[50vw] h-[61vh] border-1 border-black overflow-clip cursor-pointer">

                                        <div>Shop Womens</div>
                                        <img src={products[15].image} alt="" className="object-contain object-right"/>

                                    </div>

                            </div>

                    </div>



        </>
    )
}