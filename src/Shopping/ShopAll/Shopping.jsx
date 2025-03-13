import { Link, Outlet } from "react-router-dom"

export const Shopping = () => {

    


    // 'electronics', 'jewelery', "men's clothing", "women's clothing"

    return (

        <>
            <div className="flex flex-row max-w-full min-h-full gap-x-7 keyframes" id="Shopping">

                <div className="relative flex flex-col items-center justify-between min-h-screen h-screen p-10 border-1 border-black bg-[#FFECDA]">

                    <div className="min-w-1">
                        <h2 className="text-2xl text-center " style={{fontFamily: 'Crimson'}}>Category</h2>
                        <hr className="text-black bg-black w-[150px]" />
                    </div>
                    

                    <Link className="text-[#BD8E89]" to='electronics'>
                        <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">Electronics</button>
                    </Link>

                    <Link className="text-[#BD8E89]" to='jewelery'>
                        <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">Jewlery</button>
                    </Link>
                    
                    <Link className="text-[#BD8E89]" to='mens'>
                        <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">Mens</button>
                    </Link>

                    <Link className="text-[#BD8E89]" to='womens'>
                        <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">Womens</button>
                    </Link>

                    <Link className="text-[#BD8E89]" to='shopAll'>
                        <button className="w-[150px] h-[50px] bg-white rounded-[14px] hover:bg-[#ffd8d5]">Shop All</button>
                    </Link>
                    
                </div>
                <div className="flex max-w-full h-screen overflow-y-scroll">
                    <Outlet />
                </div>                
            </div>

        </>
    )
    
}