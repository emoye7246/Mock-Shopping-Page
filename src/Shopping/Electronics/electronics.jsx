import { useState, useEffect } from "react"
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Electronics/electronics.css'

export const Electronics = () => {

    const [electronics, updateElectronics] = useState([])
    const [error, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            if(loading){
                
                try {

                const response = await fetch('https://fakestoreapi.com/products/category/electronics')
                await response.json().then((response) => {

                    console.log(response)
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
    }, [loading])

    if(loading){

        return(

            <>
                <div>Page is Loading well be right with you</div>
            </>
        )
    }

    if(error){

        return(

            <>
                <div>There seems to be a network issue please check your connection and we will try to see whats going on on our end</div>
            </>
        )
    }

    const Shopelectronics = () => {

        return(

            <>
                {electronics.map((item) => 

                    <>
                        <div className="items">{item.title}</div>
                    </>
                )}
            </>
        )
    }


    return (

        <>
           <div className="Electronics">
                <h2>Shop All Electronics</h2>

                <div className="electronicsItems">
                        <Shopelectronics />
                </div>
           </div>
        </>
    )
}