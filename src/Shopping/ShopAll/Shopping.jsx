import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Crimson from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Fonts/Crimson_Text/CrimsonText-Regular.ttf'

export const Shopping = () => {

    


    // 'electronics', 'jewelery', "men's clothing", "women's clothing"

    return (

        <>
            <div className="flex flex-row max-w-full min-h-full gap-x-7">

                <div className="relative flex flex-col items-center justify-between min-h-screen h-screen p-10 border-1 border-black bg-[#FFECDA]">

                    <div className="min-w-1">
                        <h2 className="text-2xl text-center font-[Crimson]">Category</h2>
                        <hr className="text-black bg-black w-[150px]" />
                    </div>

                    <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">
                        <Link className="text-[#BD8E89]" to='electronics'>Electronics</Link>

                    </button>
                    <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">

                        <Link className="text-[#BD8E89]" to='jewelery'>Jewlery</Link>

                    </button>
                    <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">

                        <Link className="text-[#BD8E89]" to='mens'>Mens</Link>

                    </button>
                    <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]"> 

                        <Link className="text-[#BD8E89]" to='womens'>Womens</Link>

                    </button>
                    <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]"> 
                        
                        <Link className="text-[#BD8E89]" to='shopAll'>Shop All</Link>


                    </button>
                    


                    
                </div>
                <div className="flex max-w-full h-screen overflow-y-scroll">
                    <Outlet />
                </div>                
            </div>

        </>
    )
    
}