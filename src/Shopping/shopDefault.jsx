import { useEffect, useState } from "react"
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/shopDefault.css'


export const ShopDefault = () => {

    const [imgs, updateImages] = useState([])
    
    useEffect(() => {

        const fetchData = async () => {

            try{

                const response = await fetch('https://fakestoreapi.com/products?limit=5')
                await response.json().then((response) => {

                    updateImages(response)
                })

            }catch(error){

                console.log(error)
            }
        
        }

        fetchData()
    }, [])
    
    const ImageCarosel = () => {



        return (
            
            <>
                {imgs.map((pic) => (

                    <>
                        <img src={pic.image} alt="" className={'w-[250px] h-[250px] snap-center snap-always '} />
                    </>
                ))}
            </>
            
        )
    }


    return (

        <>
            <div className="shopDefault">

                <div className="ourBrand">
                    
                    <div className="content">
                        
                        <div>
                            <h1 className="header">Shop all our products</h1>
                        </div>

                        <div>
                            <p>We have a wide variety of products for all of our customers <br />
                                click on anyone of our categories above to explore which products <br />
                                work for you and welcome to <em>All you need shopping</em>
                            </p>
                        </div>
                    </div>

                    <div className="imageCorasel">
                                <ImageCarosel />
                    </div>

                </div>
            </div>
        </>
    )
}